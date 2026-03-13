export function SpotlightCard(props) {
   const { data } = props;
   return (
      <div className="spotlight-product">
         <img src={data.image} alt="" />
         <div className="spotlight-info">
            <strong>{data.title}</strong>
            <p>{data.category}</p>
            <p>${data.price}</p>
         </div>
      </div>
   );
}
