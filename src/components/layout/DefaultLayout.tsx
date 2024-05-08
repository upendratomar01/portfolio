import AppHeader from "../shared/AppHeader";
import AppFooter from "../shared/AppFooter";

const DefaultLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <AppHeader />
      <div>{children}</div>
      <AppFooter />
    </>
  );
};

export default DefaultLayout;
