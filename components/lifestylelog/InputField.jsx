export default function InputField({ name, type, children }) {
    return (
      <>
        <label>
            {children}
          <input name={name} type={type} />
          
        </label>
      </>
    );
    
}