function closeModal() {
    $modal = $(this).parents(".modal"), $modal.children(".overlay").remove(), $modal.hide(100)
}

function openModal() {
    $(this).siblings(".modal").prepend("<div class='overlay'></div>").show(100)
}

function TableSort(a) {
    if (this.tbl = document.getElementById(a), this.lastSortedTh = null, this.tbl && "TABLE" == this.tbl.nodeName) {
        for (var b = this.tbl.tHead.rows[0].cells, c = 0; b[c]; c++) b[c].className.match(/asc|dsc/) && (this.lastSortedTh = b[c]);
        this.makeSortable()
    }
}

function bubblesort(a, b) {
    var c, d, e = !0;
    for (1 === b ? (c = 0, d = a.length) : -1 === b && (c = a.length - 1, d = -1); e;) {
        e = !1;
        for (var f = c; f != d; f += b) a[f + b] && a[f].value > a[f + b].value && (temp = a[f], a[f] = a[f + b], a[f + b] = temp, e = !0)
    }
    return a
}

function customSort(a, b) {
    return a.forEach(function(b, c) {
        "number" == typeof b.value && (num_arr.push(a[c]), a.splice(c, 1))
    }), 1 === b ? r = bubblesort(num_arr, b).concat(bubblesort(a, b)) : -1 === b && (r = bubblesort(a, b).concat(bubblesort(num_arr, b))), r
}
dd = $(".dropdown"), widthNow = $(document).innerWidth(), dd.on("mouseenter", ".dropdown-link", function() {
        $(this).next(".dropdown-menu").show(), $(this).next(".dropdown-menu").on({
            mouseenter: function() {
                $(this).show()
            },
            mouseleave: function() {
                $(this).hide()
            }
        })
    }).on("mouseleave", ".dropdown-link", function() {
        $(this).next(".dropdown-menu").hide()
    }),
    function(a) {
        var b = {
            documentWidth: a(document).innerWidth(),
            documentHeight: a(document).innerHeight(),
            windowWidth: a(window).innerWidth(),
            windowHeight: a(window).innerHeight(),
            total_computed_height: 0
        };
        a(".static, .fixed-top").each(function(c, d) {
            b.total_computed_height += a(d).height() + parseInt(a(d).css("border-top-width").slice(0, -2)) + parseInt(a(d).css("border-bottom-width").slice(0, -2)) + parseInt(a(d).css("padding-top").slice(0, -2)) + parseInt(a(d).css("padding-bottom").slice(0, -2)) + parseInt(a(d).css("margin-top").slice(0, -2)) + parseInt(a(d).css("margin-bottom").slice(0, -2))
        }), a(".scrollable").css("height", b.windowHeight - b.total_computed_height), a(".scrollable").css("overflow-y", "scroll")
    }(jQuery), $("#txt_search_list").keyup(function() {
        search_id = $(this).attr("search_id"), $.each($("#" + search_id).children("li"))
    }), $(".modal-launch").on("click", openModal), $(".modal-close").on("click", closeModal);
var tabs = function(a) {
    var b = {};
    return b.tabs = a(".tabs > li"), b.tabs_content = a(".tabs-content > .tabs-pane"), b.tabs.on("click", "> a", function(c) {
        c.preventDefault(), selected = a(this).attr("href"), b.tabs.removeClass("active"), a(this).parent("li").addClass("active"), b.tabs_content.removeClass("active"), a(selected).addClass("active")
    }), b
}(jQuery);
$(".task-row td input[type=search]").keyup(function() {
    _this = this, $this = $(this), index = $this.parent().index(), tbody = $(".task-row").parent().next("tbody"), searchText = $this.val().toLowerCase(), $.each($(tbody).children("tr"), function(a, b) {
        -1 == $($(b).children("td")[index]).text().toLowerCase().indexOf(searchText) ? $(this).hide() : $(this).show()
    })
}), TableSort.prototype.makeSortable = function() {
    for (var a = this.tbl.tHead.rows[0].cells, b = 0; a[b]; b++) {
        a[b].cIdx = b;
        var c = document.createElement("a");
        c.href = "#", c.innerHTML = a[b].innerHTML, c.style.color = "#000", c.style.fontWeight = "bold", c.onclick = function(a) {
            return function() {
                return a.sortCol(this), !1
            }
        }(this), a[b].innerHTML = "", a[b].appendChild(c)
    }
};
var temp = new TableSort("myTable");
TableSort.prototype.sortCol = function(a) {
    for (var b = this.tbl.rows, c = this.tbl.tBodies[0].rows, d = [], e = 0, f = [], g = 0, h = a.parentNode, i = h.cIdx, j = 0; c[j]; j++) {
        var k = c[j].cells[i],
            l = k.textContent ? k.textContent : k.innerText,
            m = l.replace(/(\$|\,|\s)/g, "");
        parseFloat(m) == m ? f[g++] = {
            value: Number(m),
            rows: b[j]
        } : d[e++] = {
            value: l,
            rows: b[j]
        }
    }
};
var num_arr = [];
myArr = [{
    rows: 0,
    value: "91abc"
}, {
    rows: 1,
    value: ".zxy"
}, {
    rows: 5,
    value: "acbd"
}, {
    rows: 2,
    value: "zxy"
}, {
    rows: 3,
    value: "678"
}, {
    rows: 4,
    value: "account"
}, {
    rows: 5,
    value: ".678"
}], wizard = function(a) {
    var b = {};
    return b.totalSteps = a(".wizard-steps thead tr td").length - 1, b.wizardSteps = a(".wizard-steps thead tr td"), b.getCurrActiveStep = function() {
        return a(".wizard-steps thead tr").children(".active")
    }, b.activateStep = function(c) {
        c = parseInt(c), c <= b.totalSteps && (a(".btn-next").removeClass("disabled"), a(".btn-prev").removeClass("disabled"), 1 == c && (a(".btn-next").removeClass("disabled"), a(".btn-prev").addClass("disabled")), c == b.totalSteps && (a(".btn-prev").removeClass("disabled"), a(".btn-next").addClass("disabled")), b.wizardSteps.removeClass("active"), a(".wizard-steps thead tr td:nth-child(" + c + ")").addClass("active"), a(".wizard-content div").removeClass("active"), a(".wizard-content div:nth-child(" + c + ")").addClass("active"))
    }, a(".wizard-steps thead tr td").on("click", "a", function(c) {
        c.preventDefault(), currStep = a(this).attr("href"), step = a(this).attr("href").substr(currStep.length - 1), b.activateStep(step)
    }), a(".wizard-actions .btn-next").on("click", function() {
        a(this).hasClass("disabled") || (currStep = b.getCurrActiveStep(b.wizardSteps).children().attr("href"), nextStep = parseInt(currStep.substr(currStep.length - 1)) + 1, a(this).attr("href", "#step" + nextStep), b.activateStep(nextStep))
    }), a(".wizard-actions .btn-prev").on("click", function() {
        a(this).hasClass("disabled") || (currStep = b.getCurrActiveStep("wizard-tabs").children().attr("href"), prevStep = parseInt(currStep.substr(currStep.length - 1)) - 1, a(this).attr("href", "#step" + prevStep), b.activateStep(prevStep))
    }), b
}(jQuery);