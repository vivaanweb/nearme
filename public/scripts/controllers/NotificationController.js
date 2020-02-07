angular.module('app').controller('NotificationCtrl',
    function ($scope, $translate, Auth, Notification, Toast, NgMap, GeoCoder) {

        $scope.notification = new Notification;

        $scope.notifications = [];

        $scope.placeFromGooglePlaces = null;
        $scope.autocompleteOptions = {};
        $scope.circles = {};

        $scope.coords = [0, 0];

        var circle, map;

        Auth.ensureLoggedIn().then(function () {
            Notification.all().then(function (notifications) {
                $scope.notifications = notifications;
                $scope.$apply();
            });
        });

        $scope.$watch(function (scope) {
            return scope.placeFromGooglePlaces;
        }, function (newValue) {

            if (newValue) {

                $scope.input = {
                    latitude: $scope.placeFromGooglePlaces.geometry.location.lat(),
                    longitude: $scope.placeFromGooglePlaces.geometry.location.lng()
                };

                $scope.onInputLocationChanged();
            }
        });

        $scope.canShowCircle = function () {
            return $scope.notification.radius > 0 &&
                $scope.notification.latitude > 0 &&
                $scope.notification.longitude > 0;
        };

        $scope.onChangeType = function () {

            if ($scope.notification.type === 'All') {

                $scope.notification.latitude = 0;
                $scope.notification.longitude = 0;
                $scope.notification.radius = 0;
                $scope.notification.address = '';

                $scope.coords = [0, 0];

                map.setCenter({
                    lat: 0, lng: 0
                });

                map.setZoom(2);
            }
        };

        $scope.onAddressChanged = function () {
            GeoCoder.geocode({ address: $scope.notification.address }).then(function (result) {

                if (map) {

                    var location = result[0].geometry.location;
                    location = new google.maps.LatLng(location.lat(), location.lng());

                    map.setCenter(location);
                    map.setZoom(11);

                    $scope.notification.latitude = location.lat();
                    $scope.notification.longitude = location.lng();

                    $scope.coords = [$scope.notification.latitude, $scope.notification.longitude];
                }
            });
        }

        NgMap.getMap().then(function (objMap) {
            map = objMap;
            circle = objMap.shapes.circle;
        });

        $scope.onShapeDragEnd = function (ev) {

            var lat = ev.latLng.lat();
            var lng = ev.latLng.lng();

            $scope.notification.latitude = lat;
            $scope.notification.longitude = lng;
        };

        $scope.onInputLocationChanged = function () {

            if ($scope.notification.latitude && $scope.notification.longitude && map) {

                map.setCenter(new google.maps.LatLng(
                    $scope.notification.latitude,
                    $scope.notification.longitude
                ));

                map.setZoom(11);

                $scope.coords = [$scope.notification.latitude, $scope.notification.longitude];
            }
        }

        $scope.onSubmit = function () {

            $scope.isSending = true;

            if ($scope.notification.type === 'Geo') {
                $scope.notification.bounds = circle.getBounds().toJSON();
            }

            Notification.save($scope.notification).then(function () {

                $translate('SENT').then(function (str) {
                    Toast.show(str);
                });

                $scope.notifications.unshift($scope.notification);
                $scope.notification = new Notification;
                $scope.isSending = false;
                $scope.form.$setUntouched();
                $scope.form.$setPristine();
                $scope.$apply();
            }, function (error) {
                Toast.show(error.message);
                $scope.isSending = false;
                $scope.$apply();
            });
        }

    });