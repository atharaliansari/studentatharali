function Navbar() {
    return (
        <div className="bg-black text-white">
            <div className="container mx-auto p-5 flex justify-between items-center">
                <div className="flex items-center">
                    <img src="https://files.oaiusercontent.com/file-ObnCd9oxEBnUspgi0yCnBNeZ?se=2024-10-10T17%3A35%3A54Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dd72a00eb-9004-4046-8afa-808e5dd296a5.webp&sig=KJbizaeqFmAyz/NZWArG/fGiBuG6kr1Rz0lr12EX2CE%3D" className="h-10 w-10 rounded-full mr-3"
                    />
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="flex space-x-6">
                        <p className="hover:text--gray-400 cursor-pointer font-bold text-lg">Home</p>
                        <p className="hover:text--gray-400 cursor-pointer font-bold text-lg">About</p>
                        <p className="hover:text--gray-400 cursor-pointer font-bold text-lg">Service</p>
                        <p className="hover:text--gray-400 cursor-pointer font-bold text-lg">Contact</p>

                    </div>
                </div>
            </div>
        </div>
    )

}
export default Navbar;


















