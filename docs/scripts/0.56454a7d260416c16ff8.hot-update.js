webpackHotUpdate(0,{

/***/ 962:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nfunction _typeof2(obj) { return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; }\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(811);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _typeof(obj) {\n  return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);\n}\n\nvar TableData = function TableData(props) {\n  var item = props.item;\n\n  var _loop = function _loop(i) {\n    return {\n      v: item.map(function (p, k) {\n        var col = undefined;\n        console.log(item[i][2]);\n        var item1PlusOne = item[i][2] + 1;\n        var item1PlusItem2 = item[i][2] + item[i + 1][2];\n        var item2MinusItem1 = item[i + 1][2] - item[i][2];\n\n        // sets colspan\n        if (item1PlusOne !== item1PlusItem2) {\n          col = item2MinusItem1 !== 0 ? item2MinusItem1 : null;\n        };\n\n        return _react2.default.createElement('td', {\n          colSpan: col,\n          key: k,\n          'data-kitid': 'tabledata-[' + props.index + ', ' + k + ']-' + props.kitid }, p[1]);\n      })\n    };\n  };\n\n  for (var i = 0; i < item.length; i++) {\n    var _ret = _loop(i);\n\n    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === \"object\") return _ret.v;\n  }\n};\n\nTableData.propTypes = {\n  item: _react2.default.PropTypes.array,\n  index: _react2.default.PropTypes.number,\n  kitid: _react2.default.PropTypes.string\n};\n\nexports.default = TableData;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC10YWJsZS9saWIvdGFibGUtZGF0YS5qcz9lNThiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OztBQUViLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRTtBQUMzQyxPQUFLLEVBQUUsSUFBSTtDQUNaLENBQUMsQ0FBQzs7QUFFSCxJQUFJLE1BQU0sR0FBRyxtQkFBTyxDQUFDLEdBQU8sQ0FBQyxDQUFDOztBQUU5QixJQUFJLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFN0MsU0FBUyxzQkFBc0IsQ0FBQyxHQUFHLEVBQUU7QUFBRSxTQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQztDQUFFOztBQUUvRixTQUFTLE9BQU8sQ0FBQyxHQUFHLEVBQUU7QUFBRSxTQUFPLEdBQUcsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksR0FBRyxDQUFDLFdBQVcsS0FBSyxNQUFNLEdBQUcsUUFBUSxVQUFVLEdBQUcsMENBQUgsR0FBRyxFQUFDO0NBQUU7O0FBRTVILElBQUksU0FBUyxHQUFHLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRTtBQUN4QyxNQUFJLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDOztBQUV0QixNQUFJLEtBQUssR0FBRyxTQUFTLEtBQUssQ0FBQyxDQUFDLEVBQUU7QUFDNUIsV0FBTztBQUNMLE9BQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUMxQixZQUFJLEdBQUcsR0FBRyxTQUFTLENBQUM7QUFDcEIsZUFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4QixZQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2xDLFlBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pELFlBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O0FBR2pELFlBQUksWUFBWSxLQUFLLGNBQWMsRUFBRTtBQUNuQyxhQUFHLEdBQUcsZUFBZSxLQUFLLENBQUMsR0FBRyxlQUFlLEdBQUcsSUFBSSxDQUFDO1NBQ3RELENBQUM7O0FBRUYsZUFBTyxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FDbEMsSUFBSSxFQUNKO0FBQ0UsaUJBQU8sRUFBRSxHQUFHO0FBQ1osYUFBRyxFQUFFLENBQUM7QUFDTixzQkFBWSxFQUFFLGFBQWEsR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFDN0UsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNMLENBQUM7T0FDSCxDQUFDO0tBQ0gsQ0FBQztHQUNILENBQUM7O0FBRUYsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDcEMsUUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUVwQixRQUFJLENBQUMsT0FBTyxJQUFJLEtBQUssV0FBVyxHQUFHLFdBQVcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sUUFBUSxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztHQUM3RjtDQUNGLENBQUM7O0FBRUYsU0FBUyxDQUFDLFNBQVMsR0FBRztBQUNwQixNQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSztBQUNyQyxPQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUN2QyxPQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTTtDQUN4QyxDQUFDOztBQUVGLE9BQU8sQ0FBQyxPQUFPLEdBQUcsU0FBUyIsImZpbGUiOiI5NjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH1cblxudmFyIFRhYmxlRGF0YSA9IGZ1bmN0aW9uIFRhYmxlRGF0YShwcm9wcykge1xuICB2YXIgaXRlbSA9IHByb3BzLml0ZW07XG5cbiAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoaSkge1xuICAgIHJldHVybiB7XG4gICAgICB2OiBpdGVtLm1hcChmdW5jdGlvbiAocCwgaykge1xuICAgICAgICB2YXIgY29sID0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zb2xlLmxvZyhpdGVtW2ldWzJdKTtcbiAgICAgICAgdmFyIGl0ZW0xUGx1c09uZSA9IGl0ZW1baV1bMl0gKyAxO1xuICAgICAgICB2YXIgaXRlbTFQbHVzSXRlbTIgPSBpdGVtW2ldWzJdICsgaXRlbVtpICsgMV1bMl07XG4gICAgICAgIHZhciBpdGVtMk1pbnVzSXRlbTEgPSBpdGVtW2kgKyAxXVsyXSAtIGl0ZW1baV1bMl07XG5cbiAgICAgICAgLy8gc2V0cyBjb2xzcGFuXG4gICAgICAgIGlmIChpdGVtMVBsdXNPbmUgIT09IGl0ZW0xUGx1c0l0ZW0yKSB7XG4gICAgICAgICAgY29sID0gaXRlbTJNaW51c0l0ZW0xICE9PSAwID8gaXRlbTJNaW51c0l0ZW0xIDogbnVsbDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ3RkJyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb2xTcGFuOiBjb2wsXG4gICAgICAgICAgICBrZXk6IGssXG4gICAgICAgICAgICAnZGF0YS1raXRpZCc6ICd0YWJsZWRhdGEtWycgKyBwcm9wcy5pbmRleCArICcsICcgKyBrICsgJ10tJyArIHByb3BzLmtpdGlkIH0sXG4gICAgICAgICAgcFsxXVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICB9O1xuICB9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbS5sZW5ndGg7IGkrKykge1xuICAgIHZhciBfcmV0ID0gX2xvb3AoaSk7XG5cbiAgICBpZiAoKHR5cGVvZiBfcmV0ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihfcmV0KSkgPT09IFwib2JqZWN0XCIpIHJldHVybiBfcmV0LnY7XG4gIH1cbn07XG5cblRhYmxlRGF0YS5wcm9wVHlwZXMgPSB7XG4gIGl0ZW06IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYXJyYXksXG4gIGluZGV4OiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm51bWJlcixcbiAga2l0aWQ6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUYWJsZURhdGE7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC10YWJsZS9saWIvdGFibGUtZGF0YS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})