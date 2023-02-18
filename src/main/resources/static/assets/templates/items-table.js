(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['items-table.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <tr>\n        <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":11,"column":12},"end":{"line":11,"column":27}}}) : helper)))
    + "</td>\n        <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"quantity") || (depth0 != null ? lookupProperty(depth0,"quantity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data,"loc":{"start":{"line":12,"column":12},"end":{"line":12,"column":24}}}) : helper)))
    + "</td>\n        <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"expirationDate") || (depth0 != null ? lookupProperty(depth0,"expirationDate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"expirationDate","hash":{},"data":data,"loc":{"start":{"line":13,"column":12},"end":{"line":13,"column":30}}}) : helper)))
    + "</td>\n        <td>"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"bin") : depth0)) != null ? lookupProperty(stack1,"binLabel") : stack1), depth0))
    + "</td>\n        <td>"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"bin") : depth0)) != null ? lookupProperty(stack1,"binLocation") : stack1)) != null ? lookupProperty(stack1,"locationName") : stack1), depth0))
    + "</td>\n    </tr>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\"table table-striped\">\n    <tr>\n        <th>Description</th>\n        <th>Quantity</th>\n        <th>Expiration Date</th>\n        <th>Bin</th>\n        <th>Bin Location</th>\n    </tr>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":4},"end":{"line":17,"column":13}}})) != null ? stack1 : "")
    + "</table>";
},"useData":true});
})();