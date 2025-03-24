import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Version,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

/**
 *
 * ! En el versionado, dependiendo de la versión que le especifiquemos, la ruta quedaría:
 * [prefix]/[version]/controller/[other_paths](queryParams)(pathParams)
 *
 */

/**
 * <===== Podemos aplicar el versionado a toda la ruta completa =====>
 * @Controller({ path: 'user', version: '1' })
 */
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  /**
   * <===== O a una en particular =====>
   * @Version('1')
   */
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  /**
   *
   * > Los beneficios son:
   * # Crear una fx que diga: createV1(); que al cambiarla, siga en el proyecto, y al cambiar la version, crear la misma, que diga createV2();
   * # En caso de que una versión no funcione, simplemente le damos a la ruta api/v1/user/ y todo volvería a la normalidad
   *
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
