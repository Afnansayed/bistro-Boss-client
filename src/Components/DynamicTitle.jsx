

const DynamicTitle = ({heading, subHeading}) => {
    return (
        <div className="w-4/12 mx-auto text-center my-12">
             <p className="text-yellow-500 text-xl mb-4">{subHeading}</p>
             <h3 className="text-4xl border-y-4 py-4 uppercase font-semibold">{heading}</h3>
        </div>
    );
};

export default DynamicTitle;