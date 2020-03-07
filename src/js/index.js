import '../styles/index.css';
import '../styles/iconfont.css';

console.log('webpack 学习');
/**
 * 创建节点
 * @type {HTMLButtonElement}
 */
var Btn = document.createElement('button');
/**
 * 打印到html中
 * @type {string}
 */
Btn.innerHTML  = '新增';
/**
 * 挂载到body中
 */
document.body.appendChild(Btn);

Btn.onclick = function (ev) {
	console.log(ev);
};
