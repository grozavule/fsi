(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['bin-modal.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "                    <h5 class=\"modal-title\">Edit Bin</h5>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                    <h5 class=\"modal-title\">Add Bin</h5>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <input type=\"text\" id=\"bin-label\" class=\"form-control\" value=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"binLabel") || (depth0 != null ? lookupProperty(depth0,"binLabel") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"binLabel","hash":{},"data":data,"loc":{"start":{"line":18,"column":90},"end":{"line":18,"column":102}}}) : helper)))
    + "\" />\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "                            <input type=\"text\" id=\"bin-label\" class=\"form-control\" />\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <input type=\"hidden\" id=\"bin-id\" value=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"binId") || (depth0 != null ? lookupProperty(depth0,"binId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"binId","hash":{},"data":data,"loc":{"start":{"line":28,"column":64},"end":{"line":28,"column":73}}}) : helper)))
    + "\" />\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"modal fade\" id=\"modal-bin\" data-bs-backdrop=\"static\" data-bs-keyboard=\"false\" tabindex=\"-1\"\n     aria-labelledby=\"modal-bin\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"binLabel") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":6,"column":16},"end":{"line":10,"column":23}}})) != null ? stack1 : "")
    + "                <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n            </div>\n            <div class=\"modal-body\">\n                <form id=\"form-bin\">\n                    <div class=\"mb-3\">\n                        <label for=\"bin-label\">Bin Label</label>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"binLabel") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":17,"column":24},"end":{"line":21,"column":31}}})) != null ? stack1 : "")
    + "                    </div>\n                    <div class=\"mb-3\">\n                        <label for=\"bin-location\">Bin Location</label>\n                        <select id=\"bin-location\" class=\"form-select\"></select>\n                    </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"binId") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":20},"end":{"line":29,"column":27}}})) != null ? stack1 : "")
    + "                </form>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" data-bs-dismiss=\"modal\">Cancel</button>\n                <button type=\"submit\" id=\"btn-save-bin\">Save</button>\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true});
})();