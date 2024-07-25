<?php

use PHPUnit\Framework\TestCase;
use App\Validators\EventoValidator;

class EventoValidatorTest extends TestCase
{
    public function testValidate()
    {
        $data = [
            'titulo' => 'Teste Titulo Evento',
            'descricao' => 'Teste Descricao Evento',
            'data_inicio' => '2024-08-01 10:00:00',
            'data_termino' => '2024-08-01 12:00:00',
            'cor' => '#000000'
        ];

        $this->assertNull(EventoValidator::validate($data));
    }

    public function testValidateThrowsException()
    {
        $this->expectException(\InvalidArgumentException::class);

        $data = [
            'titulo' => 'Teste Titulo Evento',
            'descricao' => 'Teste Descricao Evento',
            'data_inicio' => 'data-invalida',
            'data_termino' => 'data-invalida',
            'cor' => '#000000'
        ];

        EventoValidator::validate($data);
    }

    public function testValidateDate()
    {
        $this->assertEquals('2024-07-20', EventoValidator::validateDate('20-07-2024'));
    }

    public function testValidateDateThrowsException()
    {
        $this->expectException(\InvalidArgumentException::class);
        $this->expectExceptionMessage("Formato de data inválido. Use o formato dd-mm-yyyy.");

        EventoValidator::validateDate('2024-07-20');
    }
}