import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const Cards = () => {

    const cards = useLoaderData();
    // console.log(cards);

    return (
        <div className="w-[98%] mx-auto px-0 md:px-0">
            <div>
                <h2 className="text-center mt-10 mb-10 mx-auto pt-10 pb-10 bg-gray-200 rounded-2xl outline-dashed outline-gray-300 animate__animated animate__zoomIn">
                    Featured Estates
                </h2>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 animate__animated animate__zoomIn">
                    {
                        cards.map(card => <Card 
                            key={card.id}
                            Acard={card}
                            ></Card>)   
                    }
                </div>
            </div>
        </div>
    );
};

export default Cards;