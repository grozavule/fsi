(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['item-modal.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "                    <h5 class=\"modal-title\">Edit Item</h5>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                    <h5 class=\"modal-title\">Add Item</h5>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <input type=\"text\" id=\"description\" class=\"form-control\" value=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data,"loc":{"start":{"line":18,"column":92},"end":{"line":18,"column":107}}}) : helper)))
    + "\" />\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "                            <input type=\"text\" id=\"description\" class=\"form-control\" />\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <input type=\"number\" id=\"quantity\" class=\"form-control\" value=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"quantity") || (depth0 != null ? lookupProperty(depth0,"quantity") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"quantity","hash":{},"data":data,"loc":{"start":{"line":26,"column":91},"end":{"line":26,"column":103}}}) : helper)))
    + "\" />\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "                            <input type=\"number\" id=\"quantity\" class=\"form-control\" />\n";
},"13":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <input type=\"date\" id=\"expiration-date\" class=\"form-control\" value=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"expirationDate") || (depth0 != null ? lookupProperty(depth0,"expirationDate") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"expirationDate","hash":{},"data":data,"loc":{"start":{"line":34,"column":96},"end":{"line":34,"column":114}}}) : helper)))
    + "\" />\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "                            <input type=\"date\" id=\"expiration-date\" class=\"form-control\" />\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"modal fade\" id=\"modal-item\" data-bs-backdrop=\"static\" data-bs-keyboard=\"false\" tabindex=\"-1\"\n     aria-labelledby=\"modal-item\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":6,"column":16},"end":{"line":10,"column":23}}})) != null ? stack1 : "")
    + "                <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n            </div>\n            <div class=\"modal-body\">\n                <form id=\"form-add-item\">\n                    <div class=\"mb-3\">\n                        <label for=\"description\">Description</label>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":17,"column":24},"end":{"line":21,"column":31}}})) != null ? stack1 : "")
    + "                    </div>\n                    <div class=\"mb-3\">\n                        <label for=\"quantity\">Quantity</label>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"quantity") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":25,"column":24},"end":{"line":29,"column":31}}})) != null ? stack1 : "")
    + "                    </div>\n                    <div class=\"mb-3\">\n                        <label for=\"expiration-date\">Expiration Date</label>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"expirationDate") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":33,"column":24},"end":{"line":37,"column":31}}})) != null ? stack1 : "")
    + "                    </div>\n                    <div class=\"mb-3\">\n                        <label for=\"bin-location\">Bin Location</label>\n                        <select id=\"bin-location\" class=\"form-select\"></select>\n                    </div>\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" data-bs-dismiss=\"modal\">Cancel</button>\n                <button type=\"submit\" id=\"btn-save-item\">Save</button>\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true});
})();