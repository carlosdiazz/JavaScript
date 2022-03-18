const BaseAle = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)]
}

const BaseDif = base => {
    const dnaBases = ['A', 'T', 'C', 'G']
    const dna = dnaBases.filter(a=>a !== base)
    return dna[Math.floor(Math.random() * 3)]
}

const Organismo = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(BaseAle())
    }
    return newStrand
  }

const pAequorFactory = (id, adn) => {
    return {
        specimenNum: id,
        adn: adn,

        mutate(){
            let cambiar = BaseAle()
            return this.adn.map(ok=>{
                if(ok===cambiar){
                    return BaseDif(cambiar)
                }else{
                    return ok
                }
            })

        },

        compareDNA(){
            let adnNew = this.mutate()
            let igual = 0;
            for (let i=0 ; i<15 ; i++){
                if(this.adn[i] === adnNew[i]){
                    igual+=1
                }
            }
            let prome = Math.floor((igual/15)*100)
            return prome>=9 ? true : false
            //return `Existe entre el ADN original y el ADN MUTADO ${prome}% de coincidencia`
        },

        willLikelySurvive(){
            let igual = 0
            for (i of this.adn){
                if(i=== 'C' || i==='G'){
                    igual+=1;
                }
            };
            return (igual>=9 ? true : false)
        }
    }
}

const fabrica = () => {
    const arr = []
    let saber=(arr.length)
    let mascota;
    let fallidas=0
    while(saber<20){
        mascota = pAequorFactory(Date.now().toString(),Organismo())
        if(mascota.willLikelySurvive() === true && mascota.compareDNA() === true){
            arr.push(mascota)
            saber+=1
        }else{
            fallidas+=1
        }
    }
    return [arr, fallidas]
}

//ok=(pAequorFactory(12,['A','A','A','A','A','A','A','A','A','A','A','A',"A","A","A"]))
//console.log(ok)
//console.log(ok.compareDNA())
//console.log(ok.compareDNA(mutate))
//console.log(ok.willLikelySurvive())

const ok = fabrica()
console.log(ok)