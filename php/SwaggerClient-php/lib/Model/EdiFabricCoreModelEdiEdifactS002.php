<?php
/**
 * EdiFabricCoreModelEdiEdifactS002
 *
 * PHP version 5
 *
 * @category Class
 * @package  Swagger\Client
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */

/**
 * EdiFabric API
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 * Swagger Codegen version: 2.4.4
 */

/**
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */

namespace Swagger\Client\Model;

use \ArrayAccess;
use \Swagger\Client\ObjectSerializer;

/**
 * EdiFabricCoreModelEdiEdifactS002 Class Doc Comment
 *
 * @category Class
 * @package  Swagger\Client
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class EdiFabricCoreModelEdiEdifactS002 implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'EdiFabric.Core.Model.Edi.Edifact.S002';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'interchange_sender_identification_1' => 'string',
        'identification_code_qualifier_2' => 'string',
        'interchange_sender_internal_identification_3' => 'string',
        'interchange_sender_internal_sub_identification_4' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'interchange_sender_identification_1' => null,
        'identification_code_qualifier_2' => null,
        'interchange_sender_internal_identification_3' => null,
        'interchange_sender_internal_sub_identification_4' => null
    ];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function swaggerTypes()
    {
        return self::$swaggerTypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function swaggerFormats()
    {
        return self::$swaggerFormats;
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'interchange_sender_identification_1' => 'interchangeSenderIdentification_1',
        'identification_code_qualifier_2' => 'identificationCodeQualifier_2',
        'interchange_sender_internal_identification_3' => 'interchangeSenderInternalIdentification_3',
        'interchange_sender_internal_sub_identification_4' => 'interchangeSenderInternalSubIdentification_4'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'interchange_sender_identification_1' => 'setInterchangeSenderIdentification1',
        'identification_code_qualifier_2' => 'setIdentificationCodeQualifier2',
        'interchange_sender_internal_identification_3' => 'setInterchangeSenderInternalIdentification3',
        'interchange_sender_internal_sub_identification_4' => 'setInterchangeSenderInternalSubIdentification4'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'interchange_sender_identification_1' => 'getInterchangeSenderIdentification1',
        'identification_code_qualifier_2' => 'getIdentificationCodeQualifier2',
        'interchange_sender_internal_identification_3' => 'getInterchangeSenderInternalIdentification3',
        'interchange_sender_internal_sub_identification_4' => 'getInterchangeSenderInternalSubIdentification4'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$swaggerModelName;
    }

    

    

    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->container['interchange_sender_identification_1'] = isset($data['interchange_sender_identification_1']) ? $data['interchange_sender_identification_1'] : null;
        $this->container['identification_code_qualifier_2'] = isset($data['identification_code_qualifier_2']) ? $data['identification_code_qualifier_2'] : null;
        $this->container['interchange_sender_internal_identification_3'] = isset($data['interchange_sender_internal_identification_3']) ? $data['interchange_sender_internal_identification_3'] : null;
        $this->container['interchange_sender_internal_sub_identification_4'] = isset($data['interchange_sender_internal_sub_identification_4']) ? $data['interchange_sender_internal_sub_identification_4'] : null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets interchange_sender_identification_1
     *
     * @return string
     */
    public function getInterchangeSenderIdentification1()
    {
        return $this->container['interchange_sender_identification_1'];
    }

    /**
     * Sets interchange_sender_identification_1
     *
     * @param string $interchange_sender_identification_1 interchange_sender_identification_1
     *
     * @return $this
     */
    public function setInterchangeSenderIdentification1($interchange_sender_identification_1)
    {
        $this->container['interchange_sender_identification_1'] = $interchange_sender_identification_1;

        return $this;
    }

    /**
     * Gets identification_code_qualifier_2
     *
     * @return string
     */
    public function getIdentificationCodeQualifier2()
    {
        return $this->container['identification_code_qualifier_2'];
    }

    /**
     * Sets identification_code_qualifier_2
     *
     * @param string $identification_code_qualifier_2 identification_code_qualifier_2
     *
     * @return $this
     */
    public function setIdentificationCodeQualifier2($identification_code_qualifier_2)
    {
        $this->container['identification_code_qualifier_2'] = $identification_code_qualifier_2;

        return $this;
    }

    /**
     * Gets interchange_sender_internal_identification_3
     *
     * @return string
     */
    public function getInterchangeSenderInternalIdentification3()
    {
        return $this->container['interchange_sender_internal_identification_3'];
    }

    /**
     * Sets interchange_sender_internal_identification_3
     *
     * @param string $interchange_sender_internal_identification_3 interchange_sender_internal_identification_3
     *
     * @return $this
     */
    public function setInterchangeSenderInternalIdentification3($interchange_sender_internal_identification_3)
    {
        $this->container['interchange_sender_internal_identification_3'] = $interchange_sender_internal_identification_3;

        return $this;
    }

    /**
     * Gets interchange_sender_internal_sub_identification_4
     *
     * @return string
     */
    public function getInterchangeSenderInternalSubIdentification4()
    {
        return $this->container['interchange_sender_internal_sub_identification_4'];
    }

    /**
     * Sets interchange_sender_internal_sub_identification_4
     *
     * @param string $interchange_sender_internal_sub_identification_4 interchange_sender_internal_sub_identification_4
     *
     * @return $this
     */
    public function setInterchangeSenderInternalSubIdentification4($interchange_sender_internal_sub_identification_4)
    {
        $this->container['interchange_sender_internal_sub_identification_4'] = $interchange_sender_internal_sub_identification_4;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset)
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed
     */
    public function offsetGet($offset)
    {
        return isset($this->container[$offset]) ? $this->container[$offset] : null;
    }

    /**
     * Sets value based on offset.
     *
     * @param integer $offset Offset
     * @param mixed   $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value)
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset)
    {
        unset($this->container[$offset]);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        if (defined('JSON_PRETTY_PRINT')) { // use JSON pretty print
            return json_encode(
                ObjectSerializer::sanitizeForSerialization($this),
                JSON_PRETTY_PRINT
            );
        }

        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}


