webpackHotUpdate(0,{

/***/ 962:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(811);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _ufunc = __webpack_require__(827);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar TableData = function TableData(props) {\n  var item = props.item;\n\n  for (var i = 0; i < item.length; i++) {\n    return item.map(function (val, index) {\n      var col = undefined;\n\n      var isUndefined = _ufunc2.default.maybe(0);\n\n      var item1 = val[2];\n      var item2 = isUndefined(item[index + 1]);\n      var item1PlusOne = item1 + 1;\n      var item1PlusItem2 = item1 + isUndefined(item[index + 1])[2];\n      var item2MinusItem1 = isUndefined(item2[2]) - item1[2];\n\n      console.log(item1PlusItem2, item2MinusItem1);\n\n      // sets colspan\n      if (item1PlusOne !== item1PlusItem2 + 1) {\n        col = item2MinusItem1 !== 0 ? item2MinusItem1 : null;\n      };\n\n      return _react2.default.createElement('td', {\n        colSpan: col,\n        key: index,\n        'data-kitid': 'tabledata-[' + props.index + ', ' + index + ']-' + props.kitid }, val[1]);\n    });\n  }\n};\n\nTableData.propTypes = {\n  item: _react2.default.PropTypes.array,\n  index: _react2.default.PropTypes.number,\n  kitid: _react2.default.PropTypes.string\n};\n\nexports.default = TableData;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC10YWJsZS9saWIvdGFibGUtZGF0YS5qcz9lNThiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUU7QUFDM0MsT0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDLENBQUM7O0FBRUgsSUFBSSxNQUFNLEdBQUcsbUJBQU8sQ0FBQyxHQUFPLENBQUMsQ0FBQzs7QUFFOUIsSUFBSSxPQUFPLEdBQUcsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7O0FBRTdDLElBQUksTUFBTSxHQUFHLG1CQUFPLENBQUMsR0FBTyxDQUFDLENBQUM7O0FBRTlCLElBQUksT0FBTyxHQUFHLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUU3QyxTQUFTLHNCQUFzQixDQUFDLEdBQUcsRUFBRTtBQUFFLFNBQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDO0NBQUU7O0FBRS9GLElBQUksU0FBUyxHQUFHLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRTtBQUN4QyxNQUFJLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDOztBQUV0QixPQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNwQyxXQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ3BDLFVBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQzs7QUFFcEIsVUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRTNDLFVBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuQixVQUFJLEtBQUssR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pDLFVBQUksWUFBWSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDN0IsVUFBSSxjQUFjLEdBQUcsS0FBSyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0QsVUFBSSxlQUFlLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFdkQsYUFBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsZUFBZSxDQUFDOzs7QUFHNUMsVUFBSSxZQUFZLEtBQUssY0FBYyxHQUFHLENBQUMsRUFBRTtBQUN2QyxXQUFHLEdBQUcsZUFBZSxLQUFLLENBQUMsR0FBRyxlQUFlLEdBQUcsSUFBSSxDQUFDO09BQ3RELENBQUM7O0FBRUYsYUFBTyxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FDbEMsSUFBSSxFQUNKO0FBQ0UsZUFBTyxFQUFFLEdBQUc7QUFDWixXQUFHLEVBQUUsS0FBSztBQUNWLG9CQUFZLEVBQUUsYUFBYSxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLEtBQUssR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUNqRixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztLQUNILENBQUMsQ0FBQztHQUNKO0NBQ0YsQ0FBQzs7QUFFRixTQUFTLENBQUMsU0FBUyxHQUFHO0FBQ3BCLE1BQUksRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLO0FBQ3JDLE9BQUssRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0FBQ3ZDLE9BQUssRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0NBQ3hDLENBQUM7O0FBRUYsT0FBTyxDQUFDLE9BQU8sR0FBRyxTQUFTIiwiZmlsZSI6Ijk2Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3VmdW5jID0gcmVxdWlyZSgndWZ1bmMnKTtcblxudmFyIF91ZnVuYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91ZnVuYyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBUYWJsZURhdGEgPSBmdW5jdGlvbiBUYWJsZURhdGEocHJvcHMpIHtcbiAgdmFyIGl0ZW0gPSBwcm9wcy5pdGVtO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbS5sZW5ndGg7IGkrKykge1xuICAgIHJldHVybiBpdGVtLm1hcChmdW5jdGlvbiAodmFsLCBpbmRleCkge1xuICAgICAgdmFyIGNvbCA9IHVuZGVmaW5lZDtcblxuICAgICAgdmFyIGlzVW5kZWZpbmVkID0gX3VmdW5jMi5kZWZhdWx0Lm1heWJlKDApO1xuXG4gICAgICB2YXIgaXRlbTEgPSB2YWxbMl07XG4gICAgICB2YXIgaXRlbTIgPSBpc1VuZGVmaW5lZChpdGVtW2luZGV4ICsgMV0pO1xuICAgICAgdmFyIGl0ZW0xUGx1c09uZSA9IGl0ZW0xICsgMTtcbiAgICAgIHZhciBpdGVtMVBsdXNJdGVtMiA9IGl0ZW0xICsgaXNVbmRlZmluZWQoaXRlbVtpbmRleCArIDFdKVsyXTtcbiAgICAgIHZhciBpdGVtMk1pbnVzSXRlbTEgPSBpc1VuZGVmaW5lZChpdGVtMlsyXSkgLSBpdGVtMVsyXTtcblxuICAgICAgY29uc29sZS5sb2coaXRlbTFQbHVzSXRlbTIsIGl0ZW0yTWludXNJdGVtMSk7XG5cbiAgICAgIC8vIHNldHMgY29sc3BhblxuICAgICAgaWYgKGl0ZW0xUGx1c09uZSAhPT0gaXRlbTFQbHVzSXRlbTIgKyAxKSB7XG4gICAgICAgIGNvbCA9IGl0ZW0yTWludXNJdGVtMSAhPT0gMCA/IGl0ZW0yTWludXNJdGVtMSA6IG51bGw7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICd0ZCcsXG4gICAgICAgIHtcbiAgICAgICAgICBjb2xTcGFuOiBjb2wsXG4gICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAnZGF0YS1raXRpZCc6ICd0YWJsZWRhdGEtWycgKyBwcm9wcy5pbmRleCArICcsICcgKyBpbmRleCArICddLScgKyBwcm9wcy5raXRpZCB9LFxuICAgICAgICB2YWxbMV1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbn07XG5cblRhYmxlRGF0YS5wcm9wVHlwZXMgPSB7XG4gIGl0ZW06IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYXJyYXksXG4gIGluZGV4OiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm51bWJlcixcbiAga2l0aWQ6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUYWJsZURhdGE7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC10YWJsZS9saWIvdGFibGUtZGF0YS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})