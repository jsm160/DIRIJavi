import { Item } from "../models/Item";

export class ItemViewModel {
  items: Item[];
  filteredItems: Item[];
  selectedItem: Item | null;
  searchTerm: string;

  constructor() {
    this.items = [];  
    this.filteredItems = [];
    this.selectedItem = null;
    this.searchTerm = '';
  }

  // Cargar items (esto simula la carga de datos)
  loadItems(items: Item[]) {
    this.items = items;
    this.filteredItems = [...this.items];
  }

  // Filtrar los items según el término de búsqueda
  filterItems() {
    this.filteredItems = this.items.filter(item =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Establecer el término de búsqueda
  setSearchTerm(term: string) {
    this.searchTerm = term;
    this.filterItems();
  }

  // Seleccionar un item
  selectItem(item: Item) {
    this.selectedItem = item;
  }

  // Buscar un item y seleccionar si se encuentra
  searchAndSelect() {
    const foundItem = this.items.find(item =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    if (foundItem) {
      this.selectItem(foundItem);
    } else {
      this.selectedItem = null;  // No se encontró el producto
    }
  }
}
