(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['items-table.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"itemId") || (depth0 != null ? lookupProperty(depth0,"itemId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemId","hash":{},"data":data,"loc":{"start":{"line":14,"column":21},"end":{"line":14,"column":31}}}) : helper)))
    + "\">\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":15,"column":16},"end":{"line":15,"column":31}}}) : helper)))
    + "</td>\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"quantity") || (depth0 != null ? lookupProperty(depth0,"quantity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data,"loc":{"start":{"line":16,"column":16},"end":{"line":16,"column":28}}}) : helper)))
    + "</td>\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"expirationDate") || (depth0 != null ? lookupProperty(depth0,"expirationDate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"expirationDate","hash":{},"data":data,"loc":{"start":{"line":17,"column":16},"end":{"line":17,"column":34}}}) : helper)))
    + "</td>\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"binLabel") || (depth0 != null ? lookupProperty(depth0,"binLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"binLabel","hash":{},"data":data,"loc":{"start":{"line":18,"column":16},"end":{"line":18,"column":28}}}) : helper)))
    + "</td>\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"binLocationName") || (depth0 != null ? lookupProperty(depth0,"binLocationName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"binLocationName","hash":{},"data":data,"loc":{"start":{"line":19,"column":16},"end":{"line":19,"column":35}}}) : helper)))
    + "</td>\n            <td>\n                <i class=\"fas fa-edit\" data-action=\"edit\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"itemId") || (depth0 != null ? lookupProperty(depth0,"itemId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemId","hash":{},"data":data,"loc":{"start":{"line":21,"column":67},"end":{"line":21,"column":77}}}) : helper)))
    + "\"></i>\n                <i class=\"fas fa-trash-alt\" data-action=\"delete\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"itemId") || (depth0 != null ? lookupProperty(depth0,"itemId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemId","hash":{},"data":data,"loc":{"start":{"line":22,"column":74},"end":{"line":22,"column":84}}}) : helper)))
    + "\"></i>\n            </td>\n        </tr>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\"table table-bordered table-striped data-table\">\n    <thead>\n        <tr>\n            <th>Description</th>\n            <th>Quantity</th>\n            <th>Expiration Date</th>\n            <th>Bin</th>\n            <th>Bin Location</th>\n            <th></th>\n        </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":25,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\n</table>";
},"useData":true});
})();