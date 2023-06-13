import { Component } from '@angular/core';

interface PropValue {
  rate: number;
  price: number;
  total: number;
}

@Component({
  selector: 'app-value-calculator',
  templateUrl: './value-calculator.component.html',
  styleUrls: ['./value-calculator.component.css']
})
export class ValueCalculatorComponent {

  opcionesPorcentajeEscrituracion: number[] = [.01, .015, .02, .025, .03, .035, .04, .045, .05, .055, .06, .065, .07];

  rentalRates: number[] = [.04, .045, .05, .055, .060, .065, .07, .075];

  porcentajeEscrituracion: number = .06;

  renta: number = 7500;

  propertyValues: PropValue[] = [];

  ngOnInit(): void {
    
    const initialRenta = this.getFromLocalStorage('rentaCasa')
    const initialEscrit = this.getFromLocalStorage('escrituracionRenta')

    if(initialRenta){
      this.renta = initialRenta
    }
    if(initialEscrit){
      this.porcentajeEscrituracion = initialEscrit
    }

    this.calculate()
  }

  setToLocalStorage(key: string, value: any ){
    const valueString = JSON.stringify(value)
    localStorage.setItem(key, valueString)
  }

  getFromLocalStorage(key: string): any | null {
    const item: string | null = localStorage.getItem(key);
    if (item !== null) {
      return JSON.parse(item);
    }
    return null;
  }

  calculate(){
    this.propertyValues = []

    console.log(this.renta)
    const rentaAnual = this.renta * 12

    console.log('La renta anual es: ' + rentaAnual)

    for(let i = 0; i<this.rentalRates.length; i++){
      const rate: number = this.rentalRates[i]
      const valorPropiedad: number = rentaAnual / rate;
      const costoMasEsc: number = valorPropiedad * (1+this.porcentajeEscrituracion)

      const value: PropValue = {
        rate: rate,
        price: valorPropiedad,
        total: costoMasEsc,
      }

      this.propertyValues.push(value)

    }
  }

  escrituracionValueChange(e: any) {
    this.porcentajeEscrituracion = e.value
    this.setToLocalStorage('escrituracionRenta', e.value)
    this.calculate()
  }

  rentalValueInput(e: any) {
    this.renta = e.value
    this.setToLocalStorage('rentaCasa', e.value)
    this.calculate()
  }
}
