webpackHotUpdate(0,{

/***/ 962:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nfunction _typeof2(obj) { return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; }\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(811);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _typeof(obj) {\n  return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);\n}\n\nvar TableData = function TableData(props) {\n  var item = props.item;\n\n  var _loop = function _loop(i) {\n    return {\n      v: item.map(function (val, index) {\n        var col = undefined;\n        var isUndefined = function isUndefined(data) {\n          return data ? data : 0;\n        };\n\n        var item1PlusOne = val[2] + 1;\n        var item1PlusItem2 = val[2] + isUndefined(item[index + 1])[2];\n        var item2MinusItem1 = isUndefined(item[index + 1])[2] - isUndefined(val[i])[2];\n\n        console.log(isUndefined(item[index + 1]));\n        console.log(isUndefined(val[i])[2]);\n\n        // sets colspan\n        if (item1PlusOne !== item1PlusItem2 + 1) {\n          col = item2MinusItem1 !== 0 ? item2MinusItem1 : null;\n        };\n\n        return _react2.default.createElement('td', {\n          colSpan: col,\n          key: index,\n          'data-kitid': 'tabledata-[' + props.index + ', ' + index + ']-' + props.kitid }, val[1]);\n      })\n    };\n  };\n\n  for (var i = 0; i < item.length; i++) {\n    var _ret = _loop(i);\n\n    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === \"object\") return _ret.v;\n  }\n};\n\nTableData.propTypes = {\n  item: _react2.default.PropTypes.array,\n  index: _react2.default.PropTypes.number,\n  kitid: _react2.default.PropTypes.string\n};\n\nexports.default = TableData;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC10YWJsZS9saWIvdGFibGUtZGF0YS5qcz9lNThiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OztBQUViLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRTtBQUMzQyxPQUFLLEVBQUUsSUFBSTtDQUNaLENBQUMsQ0FBQzs7QUFFSCxJQUFJLE1BQU0sR0FBRyxtQkFBTyxDQUFDLEdBQU8sQ0FBQyxDQUFDOztBQUU5QixJQUFJLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFN0MsU0FBUyxzQkFBc0IsQ0FBQyxHQUFHLEVBQUU7QUFBRSxTQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQztDQUFFOztBQUUvRixTQUFTLE9BQU8sQ0FBQyxHQUFHLEVBQUU7QUFBRSxTQUFPLEdBQUcsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksR0FBRyxDQUFDLFdBQVcsS0FBSyxNQUFNLEdBQUcsUUFBUSxVQUFVLEdBQUcsMENBQUgsR0FBRyxFQUFDO0NBQUU7O0FBRTVILElBQUksU0FBUyxHQUFHLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRTtBQUN4QyxNQUFJLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDOztBQUV0QixNQUFJLEtBQUssR0FBRyxTQUFTLEtBQUssQ0FBQyxDQUFDLEVBQUU7QUFDNUIsV0FBTztBQUNMLE9BQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNoQyxZQUFJLEdBQUcsR0FBRyxTQUFTLENBQUM7QUFDcEIsWUFBSSxXQUFXLEdBQUcsU0FBUyxXQUFXLENBQUMsSUFBSSxFQUFFO0FBQzNDLGlCQUFPLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1NBQ3hCLENBQUM7O0FBRUYsWUFBSSxZQUFZLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM5QixZQUFJLGNBQWMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM5RCxZQUFJLGVBQWUsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFL0UsZUFBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUMsZUFBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7OztBQUduQyxZQUFJLFlBQVksS0FBSyxjQUFjLEdBQUcsQ0FBQyxFQUFFO0FBQ3ZDLGFBQUcsR0FBRyxlQUFlLEtBQUssQ0FBQyxHQUFHLGVBQWUsR0FBRyxJQUFJLENBQUM7U0FDdEQsQ0FBQzs7QUFFRixlQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUNsQyxJQUFJLEVBQ0o7QUFDRSxpQkFBTyxFQUFFLEdBQUc7QUFDWixhQUFHLEVBQUUsS0FBSztBQUNWLHNCQUFZLEVBQUUsYUFBYSxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLEtBQUssR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUNqRixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztPQUNILENBQUM7S0FDSCxDQUFDO0dBQ0gsQ0FBQzs7QUFFRixPQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNwQyxRQUFJLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRXBCLFFBQUksQ0FBQyxPQUFPLElBQUksS0FBSyxXQUFXLEdBQUcsV0FBVyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxRQUFRLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDO0dBQzdGO0NBQ0YsQ0FBQzs7QUFFRixTQUFTLENBQUMsU0FBUyxHQUFHO0FBQ3BCLE1BQUksRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLO0FBQ3JDLE9BQUssRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0FBQ3ZDLE9BQUssRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0NBQ3hDLENBQUM7O0FBRUYsT0FBTyxDQUFDLE9BQU8sR0FBRyxTQUFTIiwiZmlsZSI6Ijk2Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfVxuXG52YXIgVGFibGVEYXRhID0gZnVuY3Rpb24gVGFibGVEYXRhKHByb3BzKSB7XG4gIHZhciBpdGVtID0gcHJvcHMuaXRlbTtcblxuICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHY6IGl0ZW0ubWFwKGZ1bmN0aW9uICh2YWwsIGluZGV4KSB7XG4gICAgICAgIHZhciBjb2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBpc1VuZGVmaW5lZCA9IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKGRhdGEpIHtcbiAgICAgICAgICByZXR1cm4gZGF0YSA/IGRhdGEgOiAwO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBpdGVtMVBsdXNPbmUgPSB2YWxbMl0gKyAxO1xuICAgICAgICB2YXIgaXRlbTFQbHVzSXRlbTIgPSB2YWxbMl0gKyBpc1VuZGVmaW5lZChpdGVtW2luZGV4ICsgMV0pWzJdO1xuICAgICAgICB2YXIgaXRlbTJNaW51c0l0ZW0xID0gaXNVbmRlZmluZWQoaXRlbVtpbmRleCArIDFdKVsyXSAtIGlzVW5kZWZpbmVkKHZhbFtpXSlbMl07XG5cbiAgICAgICAgY29uc29sZS5sb2coaXNVbmRlZmluZWQoaXRlbVtpbmRleCArIDFdKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGlzVW5kZWZpbmVkKHZhbFtpXSlbMl0pO1xuXG4gICAgICAgIC8vIHNldHMgY29sc3BhblxuICAgICAgICBpZiAoaXRlbTFQbHVzT25lICE9PSBpdGVtMVBsdXNJdGVtMiArIDEpIHtcbiAgICAgICAgICBjb2wgPSBpdGVtMk1pbnVzSXRlbTEgIT09IDAgPyBpdGVtMk1pbnVzSXRlbTEgOiBudWxsO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAndGQnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbFNwYW46IGNvbCxcbiAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAnZGF0YS1raXRpZCc6ICd0YWJsZWRhdGEtWycgKyBwcm9wcy5pbmRleCArICcsICcgKyBpbmRleCArICddLScgKyBwcm9wcy5raXRpZCB9LFxuICAgICAgICAgIHZhbFsxXVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICB9O1xuICB9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbS5sZW5ndGg7IGkrKykge1xuICAgIHZhciBfcmV0ID0gX2xvb3AoaSk7XG5cbiAgICBpZiAoKHR5cGVvZiBfcmV0ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihfcmV0KSkgPT09IFwib2JqZWN0XCIpIHJldHVybiBfcmV0LnY7XG4gIH1cbn07XG5cblRhYmxlRGF0YS5wcm9wVHlwZXMgPSB7XG4gIGl0ZW06IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYXJyYXksXG4gIGluZGV4OiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm51bWJlcixcbiAga2l0aWQ6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUYWJsZURhdGE7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC10YWJsZS9saWIvdGFibGUtZGF0YS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})