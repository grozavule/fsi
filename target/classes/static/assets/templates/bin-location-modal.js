(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['bin-location-modal.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "                    <h5 class=\"modal-title\">Edit Bin Location</h5>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                    <h5 class=\"modal-title\">Add Bin Location</h5>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <input type=\"text\" id=\"bin-location-name\" class=\"form-control\" value=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"binLocationName") || (depth0 != null ? lookupProperty(depth0,"binLocationName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"binLocationName","hash":{},"data":data,"loc":{"start":{"line":18,"column":98},"end":{"line":18,"column":117}}}) : helper)))
    + "\" />\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "                            <input type=\"text\" id=\"bin-location-name\" class=\"form-control\" />\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <input type=\"hidden\" id=\"bin-location-id\" value=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"binLocationId") || (depth0 != null ? lookupProperty(depth0,"binLocationId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"binLocationId","hash":{},"data":data,"loc":{"start":{"line":24,"column":73},"end":{"line":24,"column":90}}}) : helper)))
    + "\" />\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"modal fade\" id=\"modal-bin-location\" data-bs-backdrop=\"static\" data-bs-keyboard=\"false\" tabindex=\"-1\"\n     aria-labelledby=\"modal-bin-location\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"binLocationName") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":6,"column":16},"end":{"line":10,"column":23}}})) != null ? stack1 : "")
    + "                <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n            </div>\n            <div class=\"modal-body\">\n                <form id=\"form-bin\">\n                    <div class=\"mb-3\">\n                        <label class=\"form-label\" for=\"bin-location-name\">Bin Location Name</label>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"binLocationName") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":17,"column":24},"end":{"line":21,"column":31}}})) != null ? stack1 : "")
    + "                    </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"binLocationId") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":20},"end":{"line":25,"column":27}}})) != null ? stack1 : "")
    + "                </form>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" data-bs-dismiss=\"modal\">Cancel</button>\n                <button type=\"submit\" id=\"btn-save-bin-location\">Save</button>\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true});
})();