import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

const MenuItemCard = (props) => {
  return (
    <Card sx={{ maxWidth: "275px" }}>
      <CardHeader title={props.title} />
      <CardMedia component="img" height="194" image="./spaghettios.jpg" />
      <CardContent>
        <Typography variant="body2">{props.description}</Typography>
      </CardContent>
      <CardActions>{props.price}</CardActions>
    </Card>
  );
};
export default MenuItemCard;
