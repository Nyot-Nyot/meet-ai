interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<div className="flex items-center justify-center h-screen bg-gray-100">
			<div className="w-full max-w-5xl p-6">
				{children}
			</div>
		</div>
	);
};

export default Layout;
