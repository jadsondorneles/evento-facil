<?php

use App\Controllers\EventoController;
use App\Repositories\EventoRepository;
use App\Services\EventoService;
use Bramus\Router\Router;

$router = new Router();

$eventoController = new EventoController(new EventoService(new EventoRepository()));

$router->get('/eventos', function() use ($eventoController) {
    $eventoController->index();
});

$router->get('/eventos/{id}', function($id) use ($eventoController) {
    $eventoController->show($id);
});

$router->post('/eventos', function() use ($eventoController) {
    $eventoController->store();
});

$router->put('/eventos/{id}', function($id) use ($eventoController) {
    $eventoController->update($id);
});

$router->delete('/eventos/{id}', function($id) use ($eventoController) {
    $eventoController->delete($id);
});

$router->run();