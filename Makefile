.PHONY: run

# Script to automate Android building process

OUTPUT_FILE=App-release.apk

# Update ALIAS with your alias keystore
ALIAS=YOUR_KEY_ALIAS

# Update KEYPASS with your password keystore
KEYPASS=YOUR_KEY_PASSWORD

# Update KEYSTORE with the path where you keystore file is stored
KEYSTORE=/Users/Dev/keys/YOUR_KEYSTORE_FILE.jks

# Update ZIPALIGN with the path where the zipalign binary is stored
ZIPALIGN=/Users/Dev/Library/Android/sdk/build-tools/26.0.2/zipalign

UNSIGNED=platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk

# Your package name
PACKAGE='com.quanlabs.nearme5'

# create a signed apk
sign:
	rm -f ${OUTPUT_FILE}
	ionic cordova build android --prod --release
	jarsigner -verbose -sigalg MD5withRSA -digestalg SHA1 -keystore ${KEYSTORE} -storepass ${KEYPASS} ${UNSIGNED} ${ALIAS}
	${ZIPALIGN} -v 4 ${UNSIGNED} ${OUTPUT_FILE}

ios:
	ionic cordova build ios --prod --release

execute:
	adb shell am start -n ${PACKAGE}/${PACKAGE}.MainActivity

# install a signed apk on a device
install:
	adb install -r ${OUTPUT_FILE}

# monitor logs and filter by package name
log:
	adb logcat | grep `adb shell ps | grep ${PACKAGE} | cut -c10-15`

run: sign install execute log
