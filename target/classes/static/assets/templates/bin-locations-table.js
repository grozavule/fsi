(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['bin-locations-table.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr data-bin-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"binLocationId") || (depth0 != null ? lookupProperty(depth0,"binLocationId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"binLocationId","hash":{},"data":data,"loc":{"start":{"line":10,"column":25},"end":{"line":10,"column":42}}}) : helper)))
    + "\">\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"binLocationName") || (depth0 != null ? lookupProperty(depth0,"binLocationName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"binLocationName","hash":{},"data":data,"loc":{"start":{"line":11,"column":16},"end":{"line":11,"column":35}}}) : helper)))
    + "</td>\n            <td>\n                <button class=\"table-btn btn-edit-bin-location\" data-action=\"edit\" data-bin-location-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"binLocationId") || (depth0 != null ? lookupProperty(depth0,"binLocationId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"binLocationId","hash":{},"data":data,"loc":{"start":{"line":13,"column":105},"end":{"line":13,"column":122}}}) : helper)))
    + "\">\n                    <i class=\"fas fa-edit\"></i>\n                </button>\n                <button class=\"table-btn btn-delete-bin-location\" data-action=\"delete\" data-bin-location-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"binLocationId") || (depth0 != null ? lookupProperty(depth0,"binLocationId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"binLocationId","hash":{},"data":data,"loc":{"start":{"line":16,"column":109},"end":{"line":16,"column":126}}}) : helper)))
    + "\">\n                    <i class=\"fas fa-trash-alt\"></i>\n                </button>\n            </td>\n        </tr>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\"table table-bordered table-striped data-table\">\n    <thead>\n    <tr>\n        <th>Bin Location Name</th>\n        <th></th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":4},"end":{"line":21,"column":13}}})) != null ? stack1 : "")
    + "    </tbody>\n</table>";
},"useData":true});
})();