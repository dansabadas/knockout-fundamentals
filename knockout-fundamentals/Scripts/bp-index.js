/// <reference path="~/Scripts/knockout-3.4.2.debug.js" />
/// <reference path="jquery-1.10.2.js" />

$(function () {
  //$("#tagDialog").hide();

          var data = [
              { Id: 1, Name: "Ball Handling" },
              { Id: 2, Name: "Passing" },
              { Id: 3, Name: "Shooting" },
              { Id: 4, Name: "Rebounding" },
              { Id: 5, Name: "Transition" },
              { Id: 6, Name: "Defense" },
              { Id: 7, Name: "Team Offense" },
              { Id: 8, Name: "Team Defense" }
          ];
          var viewModel = {
            tags: ko.observableArray(data),
            tagToAdd: ko.observable(""),
            addTag: function() {
              var newTag = { Name: this.tagToAdd() };
              this.tags.push(newTag);
              this.tagToAdd("");
            }
          };

          $(document).on("click", ".tag-delete", function () {
            var item = ko.dataFor(this);  // extracts the data bound to this particular DOM element
            viewModel.tags.remove(item);
          });

          ko.applyBindings(viewModel);

  //    function tagItem(name, id) {
  //        return {
  //            Name: ko.protectedObservable(name),
  //            Id: ko.protectedObservable(id)
  //        };
  //    }

  //$.getJSON("/tags", function (data) {
  //  var viewModel = {
  //    // data
  //    tags: ko.observableArray(ko.toProtectedObservableItemArray(data)),
  //    tagToAdd: ko.observable(""),
  //    selectedTag: ko.observable(null),

  //    // behaviors
  //    addTag: function () {
  //      var newTag = { Name: this.tagToAdd() };
  //      //this.tags.push(newTag);
  //      this.tagToAdd("");

  //      ajaxAdd("/tags", ko.toJSON(newTag), function (data) {
  //        viewModel.tags.push(new ko.protectedObservableItem(data));
  //      });
  //    },

  //    selectTag: function () {
  //      viewModel.selectedTag(this);
  //    },


  //  };


  //  $(".tag-delete").live("click", function () {
  //    var item = ko.dataFor(this);
  //    viewModel.tags.remove(item);
  //  });

  //  $(".tag-edit").live("click", function () {
  //    $("#tagDialog").dialog({
  //      buttons: {
  //        Save: function () {
  //          $(this).dialog("close");
  //          viewModel.selectedTag().Name.commit();
  //        },
  //        Cancel: function () { $(this).dialog("close"); }
  //      }
  //    });
  //  });

    

  //});

  //    function toTagItemArray(data) {
  //        var tagItems = ko.utils.arrayMap(data, function (item) {
  //            return new tagItem(item.Name, item.Id);
  //        });
  //        return tagItems;
  //    }
});


