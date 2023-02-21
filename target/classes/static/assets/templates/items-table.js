(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['items-table.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":13,"column":21},"end":{"line":13,"column":27}}}) : helper)))
    + "\">\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":14,"column":16},"end":{"line":14,"column":31}}}) : helper)))
    + "</td>\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"quantity") || (depth0 != null ? lookupProperty(depth0,"quantity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data,"loc":{"start":{"line":15,"column":16},"end":{"line":15,"column":28}}}) : helper)))
    + "</td>\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"expirationDate") || (depth0 != null ? lookupProperty(depth0,"expirationDate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"expirationDate","hash":{},"data":data,"loc":{"start":{"line":16,"column":16},"end":{"line":16,"column":34}}}) : helper)))
    + "</td>\n            <td>"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"bin") : depth0)) != null ? lookupProperty(stack1,"binLabel") : stack1), depth0))
    + "</td>\n            <td>"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"bin") : depth0)) != null ? lookupProperty(stack1,"binLocation") : stack1)) != null ? lookupProperty(stack1,"locationName") : stack1), depth0))
    + "</td>\n        </tr>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\"table table-bordered table-striped data-table\">\n    <thead>\n        <tr>\n            <th>Description</th>\n            <th>Quantity</th>\n            <th>Expiration Date</th>\n            <th>Bin</th>\n            <th>Bin Location</th>\n        </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":8},"end":{"line":20,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\n</table>";
},"useData":true});
})();