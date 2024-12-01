let newYearTimer = null;
var newYear = () => {
    clearTimeout(newYearTimer);
    if (!document.querySelector('#newYear')) return;
    // ����ʱ��� and ���ڶ���
    let newYear = new Date('2025-01-29 00:00:00').getTime() / 1000,
        week = { 0: '����', 1: '��һ', 2: '�ܶ�', 3: '����', 4: '����', 5: '����', 6: '����' }

    time();

    // ���㺯��
    function nol(h) { return h > 9 ? h : '0' + h; };

    function time() {
        // ���� ʱ�����
        let now = new Date();

        // ���½� ����
        document.querySelector('#newYear .today').innerHTML = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' ' + week[now.getDay()]

        // �����������������
        let second = newYear - Math.round(now.getTime() / 1000);

        // С��0���ʾ�Ѿ�����
        if (second < 0) {
            document.querySelector('#newYear .title').innerHTML = 'Happy New Year!';
            document.querySelector('#newYear .newYear-time').innerHTML = '<span class="happyNewYear">�������</p>';
        } else {
            // ����0��δ����
            document.querySelector('#newYear .title').innerHTML = '����2025�괺�ڣ�'

            // ����һ����ֱ����Ⱦ����
            if (second > 86400) {
                document.querySelector('#newYear .newYear-time').innerHTML = `<span class="day">${Math.ceil(second / 86400)}<span class="unit">��</span></span>`
            } else {
                // С��һ����ʹ��ʱ�����ʱ��
                let h = nol(parseInt(second / 3600));
                second %= 3600;
                let m = nol(parseInt(second / 60));
                second %= 60;
                let s = nol(second);
                document.querySelector('#newYear .newYear-time').innerHTML = `<span class="time">${h}:${m}:${s}</span></span>`;
                // ��ʱ
                newYearTimer = setTimeout(time, 1000);
            }
        }
    }

    // Ԫ��Ʈ��
    jQuery(document).ready(function ($) {
        $('#newYear').wpSuperSnow({
            flakes: ['https://tuchuang.voooe.cn/images/2023/01/02/yb1.webp', 'https://tuchuang.voooe.cn/images/2023/01/02/yb2.webp', 'https://tuchuang.voooe.cn/images/2023/01/02/yb3.webp'],
            totalFlakes: '100',
            zIndex: '999999',
            maxSize: '30',
            maxDuration: '20',
            useFlakeTrans: false
        });
    });
}
// Pjax���䣺��û�п���Pjax����ֱ����newYear()����
// ����Pjax������������
document.addEventListener('pjax:complete', newYear);
document.addEventListener('DOMContentLoaded', newYear);