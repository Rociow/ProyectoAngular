import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product-list/Product';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.scss'
})
export class InputInteger{

  @Input()
  quantity!: number;

  @Input()
  stock!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<String> = new EventEmitter<String>();

  upQuantity() : void {
    if(this.quantity < this.stock){
    this.quantity++;
    this.quantityChange.emit(this.quantity);
    }else {
      this.maxReached.emit("Se alcanzó el máximo");
    }
  }

  downQuantity() : void {
    if(this.quantity >0)
    this.quantity--;
    this.quantityChange.emit(this.quantity);
  }

  changeQuantity(event: Event): void {
  const input = event.target as HTMLInputElement;
  let value = parseInt(input.value, 10);

  // Si no es número, poner 0
  if (isNaN(value)) {
    value = 0;
  }

  // No permitir menos de 0
  if (value < 0) {
    value = 0;
  }

  // No permitir más del stock
  if (value > this.stock) {
    value = this.stock;
    this.maxReached.emit("se alcanzó el máximo");
  }

  // Actualizar el valor
  this.quantityChange.emit(value);
  input.value = value.toString();
}
}
