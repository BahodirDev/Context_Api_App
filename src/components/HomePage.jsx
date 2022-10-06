import React from 'react';

function HomePage(props) {
    return (
        <div style={{padding:"20px"}}>
            <div>
                <h4>1. O`yinlar haqida, menyusi sizga hozirgi va classic bo'lgan o'yinlar haqida ma`lumot beradi (reaksiya bildirish imkoniga ega) </h4>
            </div>
            <div>
                <h3>2. Loyiha haqida fikrlar menyusida, siz ro`yhatdan o'tgan foydalanuvchilarning loyiha haqida fikrini bilishingiz mumkin. </h3>
            </div>
            <div>
                <h3>3. Fikringiz menyusida, o'z fikringizni qoldirishingiz mumkin. </h3>
            </div>
            <div>
                <h3>4. Dastur tuzuvchi bilan bog'lanish: <a href="https://t.me/sunnat_taqvo" target={'_blank'}>link</a> </h3>
            </div>
        </div>
    );
}

export default HomePage;