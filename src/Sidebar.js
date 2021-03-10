const Sidebar = () => {
    return(
        <div class="left-fixed">
        <div>
            
            <img id="logo-img"  style={{position: "absolute", borderRadius:20}} src="logo_2.png" alt="logo" />
            <nav id="nav-bar" aria-label="Primary">
              <ul id="nav-bar-area">
                <li><a href="#">Recommended</a>
                  <ul>
                    <li><a href="#">T-Shirts</a></li>
                    <li><a href="#">Shirts</a></li>
                    <li><a href="#">Jackets</a></li>
                  </ul>
                </li>
                <li><a href="#">Surprise Me!</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>      
            <form id="search-field">
              <label>
                Search
                <input type="search" name="find" className="awesomplete" id="find" list="mylist" />
                <datalist id="mylist">
                  <option>Shirt #1</option><option>Shirt #2</option><option>Shirt #3</option><option>Shirt #4</option><option>Shirt #5</option><option>Shirt #6</option><option>Shirt #7</option><option>Shirt #8</option><option>Shirt #9</option><option>Shirt #10</option><option>Shirt #11</option><option>Shirt #12</option><option>Shirt #13</option><option>Shirt #14</option><option>Shirt #15</option><option>Shirt #16</option><option>Shirt #17</option><option>Shirt #18</option><option>Shirt #19</option><option>Shirt #20</option>
                </datalist>
              </label>
              <button id="search-btn" type="button" onclick="getSearchResult()"><span class="material-icons"><img src="search.png" class="search-icon"/></span></button>
            </form>
      
          
            <ul id="btn-plcmnt">
              <li><button className="sml-btn"><span className="material-icons">favorite_border</span></button></li>
              <li><button className="sml-btn"><span className="material-icons">shopping_cart</span></button></li>
            </ul>
          </div>          
          <form>
              <h2>Filters</h2>
              <fieldset className="filters">
                <label for="sort">Show</label>
                <select name="sort" id="sort">
                  <option selected="selected" class="default_select_option">Select Sort Type</option>
                  <option value="price-high">Price, highest to lowest</option>
                  <option value="price-low">Price, lowest to highest</option>
                  <option value="newest">Newest releases</option>
                </select>
              </fieldset>              
              
              <fieldset class="filters">
                <legend>Colour</legend>
                <ul>
                  <li><input type="radio" name="colour" value="allcolors" id="allcolors" /> <label for="allcolors">All</label></li>
                  <li><input type="radio" name="colour" value="Black" id="black"/> <label for="black">Black</label></li>
                  <li><input type="radio" name="colour" value="White" id="white" /> <label for="white">White</label></li>
                  <li><input type="radio" name="colour" value="Grey" id="grey" /> <label for="grey">Grey</label></li>
                  <li><input type="radio" name="colour" value="Red" id="red" /> <label for="red">Red</label></li>
                  <li><input type="radio" name="colour" value="Blue" id="blue" /> <label for="blue">Blue</label></li>
                </ul>
              </fieldset>
              <fieldset class="filters">
                <legend>Sizes</legend>
                <ol>
                  <li><input type="radio" name="size" value="allsizes" id="allsizes"/> <label for="allsizes">All</label></li>
                  <li><input type="radio" name="size" value="XS" id="XS"/> <label for="XS">XS</label></li>
                  <li><input type="radio" name="size" value="S" id="S"/> <label for="S">S</label></li>
                  <li><input type="radio" name="size" value="M" id="M"/> <label for="M">M</label></li>
                  <li><input type="radio" name="size" value="L" id="L"/> <label for="L">L</label></li>
                  <li><input type="radio" name="size" value="XL" id="XL"/> <label for="XL">XL</label></li>
                </ol>
              </fieldset>
              <fieldset class="filters">
                <legend>Ratings</legend>
                <ol>
                  <li>
                    <input type="radio" name="rating" value="allrating" id="allrating"/><label for="allrating">All</label>
                  </li>
                  <li>
                    <input type="radio" name="rating" value="4" id="aboveFour"/>
                    <label for="aboveFour">
                      <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_border</span>
                    </label>
                  </li>
                  
                  <li>
                    <input type="radio" name="rating" value="3" id="aboveThree"/>
                    <label for="aboveThree">
                      <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_border</span><span class="material-icons">star_border</span>
                    </label>
                  </li>
                  <li>
                    <input type="radio" name="rating" value="2" id="aboveTwo"/>
                    <label for="aboveTwo">
                      <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_border</span><span class="material-icons">star_border</span><span class="material-icons">star_border</span>
                    </label>
                  </li>
                  <li>
                    <input type="radio" name="rating" value="1" id="aboveOne"/>
                    <label for="aboveOne">
                      <span class="material-icons">star</span><span class="material-icons">star_border</span><span class="material-icons">star_border</span><span class="material-icons">star_border</span><span class="material-icons">star_border</span>
                    </label>
                  </li>
                </ol>
              </fieldset>
            </form>
    </div>
    );
}

export default Sidebar;