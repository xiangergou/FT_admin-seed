/*
 * Filename: /Users/github/FT_admin-seed/src/utils/tools.js
 * Path: /Users/github/FT_admin-seed
 * Created Date: Wednesday, April 25th 2018, 3:17:25 pm
 * Author: yun
 * 
 * Copyright (c) 2018 FT
 */

/**
 * 
 * @param {function} func 
 * @param {number} wait 防抖时间
 * @param {Booleans} immediate 是否立即执行
 */
export function debounce(func, wait, immediate) {
	var timeout, result;
	var debounced = function () {
		var context = this;
		var args = arguments;

		if (timeout) clearTimeout(timeout);
		if (immediate) {
			// 如果已经执行过，不再执行
			var callNow = !timeout;
			timeout = setTimeout(function () {
				timeout = null;
			}, wait)
			if (callNow) result = func.apply(context, args)
		}
		else {
			timeout = setTimeout(function () {
				func.apply(context, args)
			}, wait);
		}
		return result;
	};
	debounced.cancel = function () {
		clearTimeout(timeout);
		timeout = null;
	};
	return debounced;
}