$(function() {

  var pages = [
    { id: 1, title: "home", content: '<div class="row"><div class="col-md-12 col-sm-12"><div class="mainWrapSubTitle textCenter"><h1 class="mainSubTitle">Nobody Home</h1><p class="mainSubText">My story about that, how to create Bicycle.</p></div></div></div>' },
    { id: 2, title: "about", content: '<div class="row"><div class="col-md-12 col-sm-12"><div class="mainWrapSubTitle textCenter"><h1 class="mainSubTitle">Who We Are? Meet Our Team!</h1><p class="mainSubText">We listen, we discuss, we advise and develop. We love to learn and use the latest technologies.</p></div></div></div><div class="row"><div class="col-md-4 col-sm-12 col-sx-12"><div class="aboutContentWrap textCenter"><div class="aboutImageWrap"><img class="aboutPersonImage" src="images/content/about/imgSashka.jpg" alt="logo"></div><div class="aboutTitleWrap"><p class="aboutTitle">ALex G</p><p class="aboutSubTitle">CEO</p></div><div class="separators aboutPersonSeparator"></div><p class="aboutText">Lorem ipsum dolor sit amet, consectetur adipiscing elit quisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. adipiscing vitae vel quam proin eget mauris eget.</p></div></div><div class="col-md-4 col-sm-6 col-sx-12"><div class="aboutContentWrap textCenter"><div class="aboutImageWrap"><img class="aboutPersonImage" src="images/content/about/imgJohn.jpg" alt="logo"></div><div class="aboutTitleWrap"><p class="aboutTitle">John Doe</p><p class="aboutSubTitle">Project Manager</p></div><div class="separators aboutPersonSeparator"></div><p class="aboutText">Lorem ipsum dolor sit amet, consectetur adipiscing elit quisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. adipiscing vitae vel quam proin eget mauris eget.</p></div></div><div class="col-md-4 col-sm-6 col-sx-12"><div class="aboutContentWrap textCenter"><div class="aboutImageWrap"><img class="aboutPersonImage" src="images/content/about/imgAnna.jpg" alt="logo"></div><div class="aboutTitleWrap"><p class="aboutTitle">Anna White</p><p class="aboutSubTitle">Developer</p></div><div class="separators aboutPersonSeparator"></div><p class="aboutText">Lorem ipsum dolor sit amet, consectetur adipiscing elit quisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. adipiscing vitae vel quam proin eget mauris eget.</p></div></div></div><div class="separators aboutSeparatorsWrap hidden-xs"></div><div class="row"><div class="col-md-3 col-sm-6 col-sx-12"><div class="aboutContentWrap textCenter"><div class="aboutImageWrap"><img src="images/content/about/diagrammaHtml.png" alt="logo"><p class="aboutDiagrammaText">97%</p></div><div class="aboutTitleWrap"><p class="aboutTitle">HTML</p></div><p class="aboutText">Nulla consectetur ornare nibh, a auctor mauris scelerisque eu proin nec urna quis.</p></div></div><div class="col-md-3 col-sm-6 col-sx-12"><div class="aboutContentWrap textCenter"><div class="aboutImageWrap"><img src="images/content/about/diagrammaCss.png" alt="logo"><p class="aboutDiagrammaText">85%</p></div><div class="aboutTitleWrap"><p class="aboutTitle">CSS</p></div><p class="aboutText">Nulla consectetur ornare nibh, a auctor mauris scelerisque eu proin nec urna quis.</p></div></div><div class="col-md-3 col-sm-6 col-sx-12"><div class="aboutContentWrap textCenter"><div class="aboutImageWrap"><img src="images/content/about/diagrammaWoocommerce.png" alt="logo"><p class="aboutDiagrammaText">45%</p></div><div class="aboutTitleWrap"><p class="aboutTitle">Woocommerce</p></div><p class="aboutText">Nulla consectetur ornare nibh, a auctor mauris scelerisque eu proin nec urna quis.</p></div></div><div class="col-md-3 col-sm-6 col-sx-12"><div class="aboutContentWrap textCenter"><div class="aboutImageWrap"><img src="images/content/about/diagrammaFun.png" alt="logo"><p class="aboutDiagrammaText">99%</p></div><div class="aboutTitleWrap"><p class="aboutTitle">Fun</p></div><p class="aboutText">Nulla consectetur ornare nibh, a auctor mauris scelerisque eu proin nec urna quis.</p></div></div></div>' },
    { id: 3, title: "portfolio", content: '' },
    { id: 4, title: "contact", content: '' },
  ];

  var menu = [
    { id: 12, title: "home", link: "/" },
    { id: 2, title: "portfolio", link: "/portfolio" },
    { id: 4, title: "about", link: "/about" },
    { id: 7, title: "contact", link: "/contact" }
  ];

  var content = [
    { id: 12, title: "Muggie Ramadani", date: "January 2012", img: "images/content/portfolio/1.jpg", preview: "images/content/preview/1.jpg", site: "muggieramadani.com", tag: "Animation", client: "Envato", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean eu leo quam." },
    { id: 2, title: "Hard Graft", date: "January 2012", img: "images/content/portfolio/2.jpg", preview: "images/content/preview/2.jpg", site: "hardgraft.com", tag: "Design", client: "Envato", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean eu leo quam." },
    { id: 344, title: "NASA GeneLab", date: "January 2012", img: "images/content/portfolio/3.jpg", preview: "images/content/preview/3.jpg", site: "genelab.nasa.gov", tag: "Design", client: "Envato", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean eu leo quam." },
    { id: 324, title: "Studio Lin", date: "January 2012", img: "images/content/portfolio/4.jpg", preview: "images/content/preview/1.jpg", site: "studiolin.com", tag: "Fashion", client: "Envato", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean eu leo quam." },
    { id: 4, title: "SO Creative Studio", date: "January 2012", img: "images/content/portfolio/6.jpg", preview: "images/content/preview/3.jpg", site: "socreative.co.uk", tag: "Web", client: "Envato", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean eu leo quam." },
    { id: 7, title: "Éléphant", date: "January 2012", img: "images/content/portfolio/7.jpg", preview: "images/content/preview/2.jpg", site: "resto-elephant.com", tag: "Branding", client: "Branding", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean eu leo quam." },
    { id: 9, title: "Zazn Meditation App", date: "January 2012", img: "images/content/portfolio/8.jpg", preview: "images/content/preview/1.jpg", site: "zaznmeditation.com", tag: "Web", client: "Envato", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean eu leo quam." },
    { id: 22, title: "Rally Interactive", date: "January 2012", img: "images/content/portfolio/5.jpg", preview: "images/content/preview/3.jpg", site: "rallyinteractive.com", tag: "Fashion", client: "Envato", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean eu leo quam." }
  ];

  window.JST = {};
  window.JST['portfolio/allProjects'] = _.template('<div class="col-lg-3 col-sm-6 col-sx-12">\n<div class="portfolioContent portfolioContentWrap">\n<a id="<%= id %>" href="#view/<%= id %>"><img class="shadow" src="<%= img %>" alt="<%= title %>"></a>\n<div class="portfolioContentInnerWrap">\n<p class="bold"><%= title %></p>\n<a href="http://<%= site %>"><%= site %></a>\n<div class="separators portfolioSeparatorsWrap"></div>\n<p class="portfolioTag"><%= tag %></p>\n</div>\n</div>\n</div>');
  window.JST['portfolio/project'] = _.template('<div class="col-lg-8 col-sm-6 col-sx-12">\n<img class="previewImg widthResize" src="<%= preview %>" alt="<%= title %>">\n</div>\n<div class="col-lg-4 col-sm-6 col-sx-12">\n<div class="previewContent rightContentWrap">\n<h1><%= title %></h1>\n<div class="separators previewSeparatorsWrap"></div>\n<p><span class="previewSubTitle">Skills: </span><%= tag %></p>\n<p><span class="previewSubTitle">Date: </span><%= date %></p>\n<p><span class="previewSubTitle">Client: </span><%= client %></p>\n<p><%= text %></p>\n<a href="http://<%= site %>"><%= site %></a>\n</div>\n</div>');
  window.JST['menu'] = _.template('<li><a href="#<%= link %>"><%= title %></a></li>');
  window.JST['page'] = _.template('<%= content %>');
  window.JST['pageTitle'] = _.template('<div class="mainSeparators mainTitleWrap"><div class="mainTitle"><%= title %></div></div>');


  var Svitla = {
    Models: {},
    Views: {},
    Collections: {}
  };

  ////////////////////////////////////////////////////////////////////
  /////////////////////////////Models/////////////////////////////////
  ////////////////////////////////////////////////////////////////////

  Svitla.Models.Project = Backbone.Model.extend();

  Svitla.Models.Menu = Backbone.Model.extend();

  Svitla.Models.Page = Backbone.Model.extend();

  ////////////////////////////////////////////////////////////////////
  /////////////////////////////Collections////////////////////////////
  ////////////////////////////////////////////////////////////////////

  Svitla.Collections.Menus = Backbone.Collection.extend({
    model: Svitla.Models.Menu
  });

  Svitla.Collections.Pages = Backbone.Collection.extend({
    model: Svitla.Models.Page
  });

  Svitla.Collections.AllProjects = Backbone.Collection.extend({

    model: Svitla.Models.Project,

    initialize: function() {
      this.index = 0;
    },

    setIndex: function(index) {
      this.index = index;
    },

    goTo: function(index) {
      this.index = index;
      this.trigger('goto');
    },

    current: function() {
      return this.at(this.index);
    },

    previous: function() {
      this.index -= 1;
      this.trigger('goto');
    },

    next: function() {
      this.index += 1;
      this.trigger('goto');
    },

    isFirst: function() {
      return this.index == 0;
    },

    isLast: function() {
      return this.index == this.length - 1;
    }
  });

  ////////////////////////////////////////////////////////////////////
  /////////////////////////////Views//////////////////////////////////
  ////////////////////////////////////////////////////////////////////

  /////////////////////////////Menu///////////////////////////////////

  Svitla.Views.Menu = Backbone.View.extend({

    initialize: function() {
      this.collection = new Svitla.Collections.Menus(menu);
      this.render();
    },

    template:  JST['menu'],

    render: function() {
      _.each(this.collection.models, function(model) {
        this.$el.append(this.template(model.toJSON()));
      }, this);
      return this;
    }

  });

  Svitla.Views.MenuTop = Svitla.Views.Menu.extend({
    el: $(".navMain > ul")
  });

  Svitla.Views.MenuBottom = Svitla.Views.Menu.extend({
    el: $(".navFooter > ul")
  });

  /////////////////////////////Page///////////////////////////////////

  Svitla.Views.Page = Backbone.View.extend({
    el: $("main > .container"),
    template:  JST['page'],
    initialize: function() {
      this.collection = new Svitla.Collections.Pages(pages);
    },

    render: function(link) {
      this.model = this.collection.findWhere({title: link});
      this.$el.html(this.template(this.model.toJSON()));
      var titlePage = new Svitla.Views.TitlePage({model: this.model});
      this.$el.prepend(titlePage.render().el);
      return this;
    }
  });

  Svitla.Views.TitlePage = Backbone.View.extend({
    template:  JST['pageTitle'],

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });

  /////////////////////////////Preview////////////////////////////////

  Svitla.Views.Project = Backbone.View.extend({
    template:  JST['portfolio/project'],

    initialize: function() {
      this.collection.setIndex(this.collection.indexOf(this.model));

      this.previous = new Svitla.Views.PreviousView({
        collection: this.collection
      });

      this.next = new Svitla.Views.NextView({
        collection: this.collection
      });

      this.listenTo(this.collection, 'goto', this.change);

    },

    change: function() {
      this.$el.empty();
      this.model = this.collection.current();
      router.navigate("view/" + this.model.get('id'), {trigger: false, replace: true});
      this.render();
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });

  Svitla.Views.IteratorButtonView = Backbone.View.extend({
    events: {
      'click': 'click'
    },

    initialize: function() {
      this.render();
      this.listenTo(this.collection, 'goto', this.render);
    },

    render: function() {
      this.$el.toggleClass('displayNone', this.isDisabled());
      return this;
    },

    isDisabled: function() {
      return false;
    }
  });

  Svitla.Views.PreviousView = Svitla.Views.IteratorButtonView.extend({
    el: '._prevLink',

    isDisabled: function() {
      return this.collection.isFirst();
    },

    click: function(e) {
      e.preventDefault();
      this.collection.previous();
    }
  });

  Svitla.Views.NextView = Svitla.Views.IteratorButtonView.extend({
    el: '._nextLink',

    isDisabled: function() {
      return this.collection.isLast();
    },

    click: function(e) {
      e.preventDefault();
      this.collection.next();
    }
  });

  /////////////////////////////Portfolio//////////////////////////////

  Svitla.Views.ThumbnailsProject = Backbone.View.extend({
    template:  JST['portfolio/allProjects'],

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });

  Svitla.Views.AllProjects = Backbone.View.extend({
    el: $("main > .container"),

    initialize: function () {
      this.collection = new Svitla.Collections.AllProjects(content);

      this.on("change:filterTag", this.filterByTag, this);
    },

    createSelect: function () {
      var select = $("<select/>", {
        html: "<option value='All'>All</option>"
      });
      _.each(this.getTags(), function (item) {
        var option = $("<option/>", {
          value: item,
          text: item,
          selected: item === this.filterTag
        }).appendTo(select);
      },this);

      return select;
    },

    events: {
      "change ._filter select": "setFilter"
    },

    setFilter: function (e) {
      this.filterTag = e.currentTarget.value;
      this.trigger("change:filterTag");
    },

    getTags: function () {
      return _.uniq(this.collection.pluck("tag"), false, function (tag) {
        return tag;
      });
    },

    filterByTag: function () {
      if (this.filterTag === "All") {
        this.render(this.collection.models);
        router.navigate("/");
      } else {
        var filtered = _.filter(this.collection.models, function (item) {
          return item.get("tag") === this.filterTag;
        }, this);
        this.render(filtered);
        router.navigate("filter/" + this.filterTag);
      }
    },

    reloadDom: function () {
      if(this.$el.children().is('._filter')) {
        this.$el.find(".row").empty();
      } else {
        this.$el.empty();
        this.$el.append('<div class="_filter"></div>');
        this.$el.find("._filter").append(this.createSelect());
        this.$el.append('<div class="row"></div>');
      }
    },

    reloadDomWithId: function () {
      if(this.$el.children().is('._previewLink')) {
        this.$el.find(".row").empty();
      } else {
        this.$el.empty();
        this.$el.append('<div class="_previewLink"><div class="previewLinkWrap"><a class="floutL previewLink _prevLink" href=""><span class="icon-left"></span> PREVIOUS PROJECT</a><a class="floutR previewLink _nextLink" href="">NEXT PROJECT <span class="icon-right"></span></a></div></div>');
        this.$el.append('<div class="row"></div>')
      }
    },

    render: function (mod) {
      var models = mod || this.collection.models;
      this.reloadDom();
      _.each(models, function(item) {
        this.renderProject(item);
      },this);
      return this;
    },

    renderProject: function(item) {
      var project = new Svitla.Views.ThumbnailsProject({
        model: item
      });
      this.$el.find(".row").append(project.render().el);
    },

    renderWithId: function (id) {
      this.reloadDomWithId();
      var project = new Svitla.Views.Project({
        model: this.collection.get(id),
        collection: this.collection
      });
      this.$el.find(".row").append(project.render().el);
      return this;
    }
  });

  ////////////////////////////////////////////////////////////////////
  /////////////////////////////Router/////////////////////////////////
  ////////////////////////////////////////////////////////////////////

  Svitla.Router = Backbone.Router.extend({
    routes: {
      "view/:index": "view",
      "filter/:tag": "filter",
      "portfolio": "portfolio",
      "about": "about",
      "contact": "contact",
      "": "home"
    },
    home: function() {
      pageViews.render("home");
    },
    about: function() {
      pageViews.render("about");
    },
    contact: function() {
      pageViews.render("contact");
    },
    portfolio: function() {
      allProjectsViews.render()
    },
    view: function(index) {
      allProjectsViews.renderWithId(index);
    },
    filter: function (tag) {
      allProjectsViews.filterTag = tag;
      allProjectsViews.trigger("change:filterTag");
    }
  });

  var pageViews = new Svitla.Views.Page;
  var menuBottomViews = new Svitla.Views.MenuBottom();
  var menuTopViews = new Svitla.Views.MenuTop();
  var allProjectsViews = new Svitla.Views.AllProjects;
  var router = new Svitla.Router();
  Backbone.history.start();

});




