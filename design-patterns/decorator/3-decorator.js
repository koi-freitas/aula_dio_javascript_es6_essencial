/* @component({
    selector: 'app-reactive-favorite-color',
    template:`
        Favorite Color: <input type="text" [formControl]="favoriteColorControl">
    `
})
exports class FavoriteColorComponent {
    favoriteColorControl = new FormControl('');
} */
// exemplo para Angular