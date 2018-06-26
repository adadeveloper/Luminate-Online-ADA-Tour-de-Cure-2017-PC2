var appName = YAHOO.Convio.PC2.Config.getJanrainEngageAppName();
    janrain.settings.appUrl = "https://" + appName + ".rpxnow.com";
    janrain.settings.social = {
       providers: JSON.parse(JSON.parse(YAHOO.Convio.PC2.Config.getJanrainShareProviders())) // yeah. I know
    };
    function janrainSocialOnLoad() {
    janrain.social.on({
        // share_done does not work with native sharing:
        // https://support.janrain.com/hc/en-us/articles/204244773-When-using-native-sharing-provider-select-is-the-only-sharing-event-that-is-triggered-
        share_done: function(data) {
            logShare(data.auth_token, data.provider)
        }
    });
}