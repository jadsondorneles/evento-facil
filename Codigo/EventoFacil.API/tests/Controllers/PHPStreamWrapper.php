<?php

class PHPStreamWrapper {
    private static $input;
    public $context;

    public static function setInput($input) {
        self::$input = $input;
    }

    public function stream_open($path, $mode, $options, &$opened_path) {
        return true;
    }

    public function stream_read($count) {
        return fread(self::$input, $count);
    }

    public function stream_eof() {
        return feof(self::$input);
    }

    public function stream_stat() {
        return [];
    }

    public function stream_seek($offset, $whence) {
        if (self::$input === null) {
            return -1;
        }
        return fseek(self::$input, $offset, $whence);
    }
}