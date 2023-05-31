'use strict';

var server = require('server');
var cache = require('*/cartridge/scripts/middleware/cache');
var consentTracking = require('*/cartridge/scripts/middleware/consentTracking');
var pageMetaData = require('*/cartridge/scripts/middleware/pageMetaData');

/**
 * Any customization on this endpoint, also requires update for Default-Start endpoint
 */
server.get('Show', consentTracking.consent, cache.applyDefaultCache, function (req, res, next) {
    var Site = require('dw/system/Site');
    var pageMetaHelper = require('*/cartridge/scripts/helpers/pageMetaHelper');
    var ContentMgr = require("dw/content/ContentMgr");
    var desktopBannerImageContentAsset = ContentMgr.getContent('desktop_banner_content_assets_image'); 
    var desktopBannerImage = desktopBannerImageContentAsset.custom.desktop_image.absURL;

    pageMetaHelper.setPageMetaTags(req.pageMetaData, Site.current);
    res.render('/home/homePage', {desktopBannerImage}); 
    next();
}, pageMetaData.computedPageMetaData);

server.get('ErrorNotFound', function (req, res, next) {
    res.setStatusCode(404);
    res.render('error/notFound');
    next();
});

module.exports = server.exports();
