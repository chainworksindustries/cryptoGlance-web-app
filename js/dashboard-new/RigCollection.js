/**

  TODO:
  - finish general structure of RigCollection class
  - setup data synchronization of RigCollection overview

**/

!function (root, $) {

  /*==============================================================
  =            RigCollection Class/Object/Constructor            =
  ==============================================================*/

  var RigCollection = function () {
    this.collection = []
  }

  /*-----  End of RigCollection Class/Object/Constructor  ------*/


  /*====================================================
  =            RigCollection Public Methods            =
  ====================================================*/

  RigCollection.prototype.add = function (rig) {
    this.collection.push(rig)
  }

  RigCollection.prototype.update = function () {}

  RigCollection.prototype.generateOverview = function () {

    var overview = $('#overview')
    var overviewTableData = ''

    $.ajax({
      type: 'post',
      data : {
        type: 'miners',
        action: 'overview'
      },
      url: 'ajax.php',
      dataType: 'json'
    })

    $('#overview .panel-body-overview div table tbody').append()
  }

  /*-----  End of RigCollection Public Methods  ------*/


  /*=====================================================
  =            RigCollection Private Methods            =
  =====================================================*/



  /*-----  End of RigCollection Private Methods  ------*/


  /*============================================
  =            RigCollection Export            =
  ============================================*/

  root.RigCollection = RigCollection

  /*-----  End of RigCollection Export  ------*/

}(window, window.jQuery)

$(rigNavElm).find('li:eq('+ selectedNav +')').addClass('active');
        $(rigTabContentElm).find('.tab-pane:eq('+ selectedNav +')').addClass('active');

        $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            var siteLayout = $.cookie('use_masonry_layout');
            if (siteLayout == 'yes') {
                initMasonry();
            }
        });

        // Update Overview Panel
        if (rig.summary.hashrate_5s < 1) {
            rig.summary.hashrate_5s = (rig.summary.hashrate_5s * 1000) + ' KH/S';
        } else if (rig.summary.hashrate_5s > 1000) {
            rig.summary.hashrate_5s = parseFloat(rig.summary.hashrate_5s / 1000).toFixed(2) + ' GH/S';
        } else {
            rig.summary.hashrate_5s = parseFloat(rig.summary.hashrate_5s).toFixed(2) + ' MH/S';
        }

        // update overview
        if (rigOverviewRow.length == 0) {
            $(overviewTable).append('<tr data-rig="'+ rigId +'"></tr>');
            rigOverviewRow = $('tr[data-rig="'+ rigId +'"]', overviewTable)
        }
        $(rigOverviewRow).html('<td><i class="icon icon-'+ rigIcon +' '+ rigStatus +'"></i></td><td><a href="#rig-'+ rigId +'" class="anchor-offset rig-'+ rigId +' '+ rigStatus +'">'+ $('h1', rigElm).html() +'</a></td><td>'+ rig.summary.hashrate_5s +'</td><td>'+ rig.summary.active_mining_pool +'</td><td>'+ rig.summary.uptime +'</td>');

        $(summaryContentTabTable).show();
