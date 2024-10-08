import "../index.css"

export const ComponentContainer = ({children}) => {

    return (
        <div className="component-container">
            {children}
        </div>
    );
};