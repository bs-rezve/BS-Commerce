import { ManufacturerModule } from 'src/modules/manufacturer/manufacturer.rest.module';
import { AuthModule } from 'src/modules/auth/auth.rest.module';
import { UserModule } from 'src/modules/user/user.rest.module';
import { CategoryModule } from 'src/modules/category/category.rest.module';

export const ResolveRestModule = () => {
  return [
    AuthModule,
    UserModule,
    ManufacturerModule,
    CategoryModule,
  ];
};
