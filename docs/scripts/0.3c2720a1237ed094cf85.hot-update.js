webpackHotUpdate(0,{

/***/ 962:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(811);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar TableData = function TableData(props) {\n  var item = props.item;\n\n  for (var i = 0; i < item.length; i++) {\n    (function (i) {\n      return item.map(function (val, index) {\n        var col = undefined;\n        var isUndefined = function isUndefined(data) {\n          return data ? data : 0;\n        };\n\n        var item1PlusOne = val[2] + 1;\n        var item1PlusItem2 = val[2] + isUndefined(item[index + 1])[2];\n        var item2MinusItem1 = isUndefined(item[index + 1][2]) - val[i][2];\n\n        // sets colspan\n        if (item1PlusOne !== item1PlusItem2) {\n          col = item2MinusItem1 !== 0 ? item2MinusItem1 : null;\n        };\n\n        return _react2.default.createElement('td', {\n          colSpan: col,\n          key: index,\n          'data-kitid': 'tabledata-[' + props.index + ', ' + index + ']-' + props.kitid }, val[1]);\n      });\n    })(i);\n  }\n};\n\nTableData.propTypes = {\n  item: _react2.default.PropTypes.array,\n  index: _react2.default.PropTypes.number,\n  kitid: _react2.default.PropTypes.string\n};\n\nexports.default = TableData;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC10YWJsZS9saWIvdGFibGUtZGF0YS5qcz9lNThiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUU7QUFDM0MsT0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDLENBQUM7O0FBRUgsSUFBSSxNQUFNLEdBQUcsbUJBQU8sQ0FBQyxHQUFPLENBQUMsQ0FBQzs7QUFFOUIsSUFBSSxPQUFPLEdBQUcsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7O0FBRTdDLFNBQVMsc0JBQXNCLENBQUMsR0FBRyxFQUFFO0FBQUUsU0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7Q0FBRTs7QUFFL0YsSUFBSSxTQUFTLEdBQUcsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFO0FBQ3hDLE1BQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7O0FBRXRCLE9BQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3BDLEtBQUMsVUFBVSxDQUFDLEVBQUU7QUFDWixhQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ3BDLFlBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQztBQUNwQixZQUFJLFdBQVcsR0FBRyxTQUFTLFdBQVcsQ0FBQyxJQUFJLEVBQUU7QUFDM0MsaUJBQU8sSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLENBQUM7U0FDeEIsQ0FBQzs7QUFFRixZQUFJLFlBQVksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzlCLFlBQUksY0FBYyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlELFlBQUksZUFBZSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O0FBR2pFLFlBQUksWUFBWSxLQUFLLGNBQWMsRUFBRTtBQUNuQyxhQUFHLEdBQUcsZUFBZSxLQUFLLENBQUMsR0FBRyxlQUFlLEdBQUcsSUFBSSxDQUFDO1NBQ3RELENBQUM7O0FBRUYsZUFBTyxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FDbEMsSUFBSSxFQUNKO0FBQ0UsaUJBQU8sRUFBRSxHQUFHO0FBQ1osYUFBRyxFQUFFLEtBQUs7QUFDVixzQkFBWSxFQUFFLGFBQWEsR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksR0FBRyxLQUFLLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFDakYsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUNQLENBQUM7T0FDSCxDQUFDLENBQUM7S0FDSixFQUFFLENBQUMsQ0FBQyxDQUFDO0dBQ1A7Q0FDRixDQUFDOztBQUVGLFNBQVMsQ0FBQyxTQUFTLEdBQUc7QUFDcEIsTUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUs7QUFDckMsT0FBSyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU07QUFDdkMsT0FBSyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU07Q0FDeEMsQ0FBQzs7QUFFRixPQUFPLENBQUMsT0FBTyxHQUFHLFNBQVMiLCJmaWxlIjoiOTYyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBUYWJsZURhdGEgPSBmdW5jdGlvbiBUYWJsZURhdGEocHJvcHMpIHtcbiAgdmFyIGl0ZW0gPSBwcm9wcy5pdGVtO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbS5sZW5ndGg7IGkrKykge1xuICAgIChmdW5jdGlvbiAoaSkge1xuICAgICAgcmV0dXJuIGl0ZW0ubWFwKGZ1bmN0aW9uICh2YWwsIGluZGV4KSB7XG4gICAgICAgIHZhciBjb2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBpc1VuZGVmaW5lZCA9IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKGRhdGEpIHtcbiAgICAgICAgICByZXR1cm4gZGF0YSA/IGRhdGEgOiAwO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBpdGVtMVBsdXNPbmUgPSB2YWxbMl0gKyAxO1xuICAgICAgICB2YXIgaXRlbTFQbHVzSXRlbTIgPSB2YWxbMl0gKyBpc1VuZGVmaW5lZChpdGVtW2luZGV4ICsgMV0pWzJdO1xuICAgICAgICB2YXIgaXRlbTJNaW51c0l0ZW0xID0gaXNVbmRlZmluZWQoaXRlbVtpbmRleCArIDFdWzJdKSAtIHZhbFtpXVsyXTtcblxuICAgICAgICAvLyBzZXRzIGNvbHNwYW5cbiAgICAgICAgaWYgKGl0ZW0xUGx1c09uZSAhPT0gaXRlbTFQbHVzSXRlbTIpIHtcbiAgICAgICAgICBjb2wgPSBpdGVtMk1pbnVzSXRlbTEgIT09IDAgPyBpdGVtMk1pbnVzSXRlbTEgOiBudWxsO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAndGQnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbFNwYW46IGNvbCxcbiAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAnZGF0YS1raXRpZCc6ICd0YWJsZWRhdGEtWycgKyBwcm9wcy5pbmRleCArICcsICcgKyBpbmRleCArICddLScgKyBwcm9wcy5raXRpZCB9LFxuICAgICAgICAgIHZhbFsxXVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSkoaSk7XG4gIH1cbn07XG5cblRhYmxlRGF0YS5wcm9wVHlwZXMgPSB7XG4gIGl0ZW06IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYXJyYXksXG4gIGluZGV4OiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm51bWJlcixcbiAga2l0aWQ6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUYWJsZURhdGE7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC10YWJsZS9saWIvdGFibGUtZGF0YS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})