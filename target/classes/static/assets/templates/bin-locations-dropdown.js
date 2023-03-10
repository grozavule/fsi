(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['bin-locations-dropdown.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"selected") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":6,"column":11}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <option value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"binLocationId") || (depth0 != null ? lookupProperty(depth0,"binLocationId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"binLocationId","hash":{},"data":data,"loc":{"start":{"line":3,"column":23},"end":{"line":3,"column":40}}}) : helper)))
    + "\" selected>"
    + alias4(((helper = (helper = lookupProperty(helpers,"binLocationName") || (depth0 != null ? lookupProperty(depth0,"binLocationName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"binLocationName","hash":{},"data":data,"loc":{"start":{"line":3,"column":51},"end":{"line":3,"column":70}}}) : helper)))
    + "</option>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <option value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"binLocationId") || (depth0 != null ? lookupProperty(depth0,"binLocationId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"binLocationId","hash":{},"data":data,"loc":{"start":{"line":5,"column":23},"end":{"line":5,"column":40}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"binLocationName") || (depth0 != null ? lookupProperty(depth0,"binLocationName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"binLocationName","hash":{},"data":data,"loc":{"start":{"line":5,"column":42},"end":{"line":5,"column":61}}}) : helper)))
    + "</option>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":7,"column":9}}})) != null ? stack1 : "");
},"useData":true});
})();