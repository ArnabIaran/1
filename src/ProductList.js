
const ProductList = ({ products }) => {
  return (
    <main><br></br><br></br>
    <header className="main-header">
        <h1 id="main-header-text">Sale on Attires</h1>
    </header><br></br>
    <div className="products">
    {products.map(product=>(
    <article className="product" key={product.id}>
        <h3 id="product1-name">{product.name}</h3>
        <header>
        <img className="myproduct-img" id="product1-img" src={product.thumb} alt="Product Image"/>
        </header>
        <form>
        <fieldset className="product-field">
            <legend>Colours</legend>
            <ul>
            <li><label><input type="radio" name="colour" value="r"/> <span id="product1-color1-text">Red</span></label></li>
            <li><label><input type="radio" name="colour" value="w"/> <span id="product1-color2-text">Black</span></label></li>
            <li><label><input type="radio" name="colour" value="b"/> <span id="product1-color3-text">Blue</span></label></li>
            </ul>
        </fieldset>
        
        <fieldset className="product-field">
            <legend>Sizes</legend>
            <ol>
            <li><label><input type="radio" name="size" value="m"/> <span id="product1-size1-text">M</span></label></li>
            <li><label><input type="radio" name="size" value="l"/> <span id="product1-size2-text">L</span></label></li>
            <li><label><input type="radio" name="size" value="xl"/> <span id="product1-size3-text">XL</span></label></li>
            </ol>
        </fieldset>
        
        <footer>
            <dl>
            <dt>Rating</dt>
            <dd className="product-rating">4 <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span class="material-icons">star_half</span></dd>
            </dl>
            <data id="product1-price-val" value="23">
            <del>$1150.00</del> 
            <ins id="product1-price-ins">$ {product.price}</ins>
            </data>
            <button className="product-selection-btn" type="button">
            <img src="addcart.png" alt="add to cart"/>
            </button>
            <button className="product-selection-btn" type="button"><img src="fav.png" alt="favorites"/></button>
            <a href="#">see more</a>
        </footer>
        </form>
    </article>
   ))}
    </div>
    </main>
  );
}
 
export default ProductList;