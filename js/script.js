
// Descrizione:
// Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
// Vi ricordo le funzionalità minime
// Deve vedersi un'immagine grande che è l'immagine principale
// Devono vedersi i thumbnails
// Il thumbnails che corrisponde all'immagine grande deve essere graficamente messo in risalto con una classe active
// Deve essere possibile cambiare l'immagine principale con le freccette prev e next
// Bisogna fare in modo che il carosello sia "infinito": se clicco sul next e sono all'ultima immagine, ricomincio dalla prima; se sono alla prima immagine e clicco sul prev vado all'ultima.
// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

console.log("ok vue", Vue);

const app = Vue.createApp({
    data(){
        return{
            currentIndex: 0,
            pictures:[
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                  }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                  }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                  }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                  }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                  }
            ]
        }
    },

    methods:{
        goToPrev(){
        this.currentIndex--
        if(this.currentIndex<0){
            this.currentIndex=this.pictures.length -1
        }
    },
        goToNext(){
        this.currentIndex++
        if(this.currentIndex===this.pictures.length){
            this.currentIndex=0
        }
    },
        setCurrentIndex(target){
            this.currentIndex=target
        }
    
    }

});

app.mount("#root")
