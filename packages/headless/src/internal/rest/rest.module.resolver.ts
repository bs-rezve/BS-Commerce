import { AuthModule } from 'src/modules/auth/auth.rest.module';
import { CartModule } from 'src/modules/cart/cart.rest.module';
import { CategoryModule } from 'src/modules/category/category.rest.module';
import { CompareModule } from 'src/modules/compare/compare.rest.module';
import { CustomerAuthModule } from 'src/modules/customer-auth/auth.rest.module';
import { ManufacturerModule } from 'src/modules/manufacturer/manufacturer.rest.module';
import { MediaModule } from 'src/modules/media/media.rest.module';
import { OrderModule } from 'src/modules/order/order.rest.module';
import { ProductModule } from 'src/modules/product/product.rest.module';
import { TagsModule } from 'src/modules/tags/tags.rest.module';
import { UserModule } from 'src/modules/user/user.rest.module';
import { BrandModule } from 'src/modules/brands/brand.rest.module';
import { WishListModule } from 'src/modules/wishlist/wishlist.rest.module';

export const ResolveRestModule = () => {
  return [
    AuthModule,
    UserModule,
    BrandModule,
    ProductModule,
    ManufacturerModule,
    CategoryModule,
    CustomerAuthModule,
    CartModule,
    MediaModule,
    CompareModule,
    WishListModule,
    OrderModule,
    TagsModule,
  ];
};
