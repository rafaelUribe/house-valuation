import { Component } from '@angular/core';

interface Rental {
  rate: number;
  rental: number;
}

@Component({
  selector: 'app-rental-calculator',
  templateUrl: './rental-calculator.component.html',
  styleUrls: ['./rental-calculator.component.css']
})
export class RentalCalculatorComponent {

  opcionesPorcentajeEscrituracion: number[] = [.01, .015, .02, .025, .03, .035, .04, .045, .05, .055, .06, .065, .07];

  rentalRates: number[] = [.04, .045, .05, .055, .060, .065, .07, .075];

  porcentajeEscrituracion: number = .06;

  renta: number = 0;

  precioPropiedad: number = 1000000;

  costoEscrituracion: number = this.precioPropiedad * this.porcentajeEscrituracion;
  costoPropiedad: number = this.precioPropiedad + this.costoEscrituracion;

  propertyValues: number[] = [];

  rentals: Rental[] = [];

  ngOnInit(): void {
    const initialPrice = this.getFromLocalStorage('precioCasa')
    const initialEscrit = this.getFromLocalStorage('escrituracionPrecio')

    if(initialPrice){
      this.precioPropiedad = initialPrice
    }
    if(initialEscrit){
      this.porcentajeEscrituracion = initialEscrit
      this.costoEscrituracion = this.precioPropiedad * this.porcentajeEscrituracion
      this.costoPropiedad = this.precioPropiedad + this.costoEscrituracion
    }

    this.calculate()
  }

  calculate(){
    this.rentals = []

    for(let i=0; i<this.rentalRates.length; i++){

      const rate: number = this.rentalRates[i]

      const rental: Rental = {
        rate: rate,
        rental: (this.costoPropiedad * rate) / 12
      }

      this.rentals.push(rental)

    }
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

  escrituracionValueChange(e: any) {
    this.setToLocalStorage('escrituracionPrecio', e.value)
    this.porcentajeEscrituracion = e.value
    this.costoEscrituracion = this.precioPropiedad * e.value
    this.costoPropiedad = this.precioPropiedad + this.costoEscrituracion

    this.calculate()
  }

  propertyValueInput(e: any) {
    const propValue = e.value
    this.setToLocalStorage('precioCasa', e.value)
    this.costoEscrituracion = propValue * this.porcentajeEscrituracion
    this.costoPropiedad = propValue + this.costoEscrituracion

    this.calculate()

  }
}
