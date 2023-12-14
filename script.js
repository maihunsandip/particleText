window.addEventListener('load', function() {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.lineWidth = '3';
    ctx.strokeStyle = 'red'
    ctx.beginPath();
    ctx.moveTo(canvas.width/2, 0);
    ctx.lineTo(canvas.width/2, canvas.height);
    ctx.stroke();

    ctx.lineWidth = '3';
    ctx.strokeStyle = 'green'
    ctx.beginPath();
    ctx.moveTo(0, canvas.height/2);
    ctx.lineTo(canvas.width, canvas.height/2);
    ctx.stroke();

    const text = 'SANDIP';
    const textX = canvas.width/2;
    const textY = canvas.height/2;
    console.log(ctx);
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'orangered';

    ctx.font = '80px Helvetica';
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle';
    ctx.fillText(text, textX, textY);
    ctx.strokeText(text, textX, textY);
})