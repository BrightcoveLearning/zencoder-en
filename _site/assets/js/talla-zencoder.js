var appID = "00c26be3-4421-41e6-bb00-1dee68740f67"; // token for anonymous profile
var token =
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1ODI4MDQzNDF9.RYf2x65FXvdDURzM h00i76KfUrYlsDLsw6mVuEv6zmE';
// -----
  Talla.config = Talla.init(
    appID,
    Talla.OptionJWTCredentials(token), Talla.OptionBotName("Zencoder by Brightcove"),
    Talla.OptionAnonymous(true),
    Talla.OptionThemeColor('#000000'),
    Talla.OptionDisplayName('Zencoder Support'),
    Talla.OptionKnowledgeGroups(['2233f970-dfad-4c06-bb6e-fdf4ddba4506']),
    Talla.OptionWideBeacon(true),
    Talla.OptionBeaconCTA("Ask a question"),
    Talla.OptionOpenIcon('https://support.brightcove.com/sites/default/files/favicon-64.png'),
    Talla.OptionBotIcon('https://support.brightcove.com/sites/default/files/favicon-64.png'),
    Talla.OptionAutodetectSession
  );
Talla.config.display(Talla.OptionQuickLoadBeacon, Talla.OptionDetectParent(function() {
      return document.querySelector('#talla_parent');
    }
  )
);
