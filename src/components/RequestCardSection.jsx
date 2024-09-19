
const ReferralCard = ({ title, description, cost, buttonText }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="mb-4">
                <span className="bg-gray-100 text-blue-600 px-4 py-1 rounded-lg font-semibold">
                    Cost: ${cost}
                </span>
            </div>
            <button className="bg-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-700">
                {buttonText} →
            </button>
        </div>
    );
};

const RequestCardSection = ({ heading, description, cards }) => {
    return (
        <div className="bg-neutral-100 py-12">
            <div className="max-w-5xl mx-auto text-center my-4">
                <h1 className="text-3xl font-bold mb-4">{heading}</h1>
                <p className="text-lg text-gray-600">{description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {cards?.map((card, index) => (
                    <ReferralCard
                        key={index}
                        title={card.title}
                        description={card.description}
                        cost={card.cost}
                        buttonText={card.buttonText}
                    />
                ))}
            </div>
        </div>
    );
}
export default RequestCardSection;