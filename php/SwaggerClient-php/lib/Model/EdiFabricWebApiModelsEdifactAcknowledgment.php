<?php
/**
 * EdiFabricWebApiModelsEdifactAcknowledgment
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
 * EdiFabricWebApiModelsEdifactAcknowledgment Class Doc Comment
 *
 * @category Class
 * @package  Swagger\Client
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class EdiFabricWebApiModelsEdifactAcknowledgment implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'EdiFabric.Web.Api.Models.EdifactAcknowledgment';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'original_unb' => '\Swagger\Client\Model\EdiFabricCoreModelEdiEdifactUNB',
        'original_ung' => '\Swagger\Client\Model\EdiFabricCoreModelEdiEdifactUNG',
        'ack_type' => 'string',
        'ack' => '\Swagger\Client\Model\EdiFabricCoreModelEdiEdiMessage',
        'original_transactions' => '\Swagger\Client\Model\EdiFabricCoreModelEdiEdiMessage[]'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'original_unb' => null,
        'original_ung' => null,
        'ack_type' => null,
        'ack' => null,
        'original_transactions' => null
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
        'original_unb' => 'originalUnb',
        'original_ung' => 'originalUng',
        'ack_type' => 'ackType',
        'ack' => 'ack',
        'original_transactions' => 'originalTransactions'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'original_unb' => 'setOriginalUnb',
        'original_ung' => 'setOriginalUng',
        'ack_type' => 'setAckType',
        'ack' => 'setAck',
        'original_transactions' => 'setOriginalTransactions'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'original_unb' => 'getOriginalUnb',
        'original_ung' => 'getOriginalUng',
        'ack_type' => 'getAckType',
        'ack' => 'getAck',
        'original_transactions' => 'getOriginalTransactions'
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

    const ACK_TYPE_TECHNICAL = 'Technical';
    const ACK_TYPE_FUNCTIONAL = 'Functional';
    const ACK_TYPE_IMPLEMENTATION = 'Implementation';
    

    
    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getAckTypeAllowableValues()
    {
        return [
            self::ACK_TYPE_TECHNICAL,
            self::ACK_TYPE_FUNCTIONAL,
            self::ACK_TYPE_IMPLEMENTATION,
        ];
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
        $this->container['original_unb'] = isset($data['original_unb']) ? $data['original_unb'] : null;
        $this->container['original_ung'] = isset($data['original_ung']) ? $data['original_ung'] : null;
        $this->container['ack_type'] = isset($data['ack_type']) ? $data['ack_type'] : null;
        $this->container['ack'] = isset($data['ack']) ? $data['ack'] : null;
        $this->container['original_transactions'] = isset($data['original_transactions']) ? $data['original_transactions'] : null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        $allowedValues = $this->getAckTypeAllowableValues();
        if (!is_null($this->container['ack_type']) && !in_array($this->container['ack_type'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value for 'ack_type', must be one of '%s'",
                implode("', '", $allowedValues)
            );
        }

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
     * Gets original_unb
     *
     * @return \Swagger\Client\Model\EdiFabricCoreModelEdiEdifactUNB
     */
    public function getOriginalUnb()
    {
        return $this->container['original_unb'];
    }

    /**
     * Sets original_unb
     *
     * @param \Swagger\Client\Model\EdiFabricCoreModelEdiEdifactUNB $original_unb original_unb
     *
     * @return $this
     */
    public function setOriginalUnb($original_unb)
    {
        $this->container['original_unb'] = $original_unb;

        return $this;
    }

    /**
     * Gets original_ung
     *
     * @return \Swagger\Client\Model\EdiFabricCoreModelEdiEdifactUNG
     */
    public function getOriginalUng()
    {
        return $this->container['original_ung'];
    }

    /**
     * Sets original_ung
     *
     * @param \Swagger\Client\Model\EdiFabricCoreModelEdiEdifactUNG $original_ung original_ung
     *
     * @return $this
     */
    public function setOriginalUng($original_ung)
    {
        $this->container['original_ung'] = $original_ung;

        return $this;
    }

    /**
     * Gets ack_type
     *
     * @return string
     */
    public function getAckType()
    {
        return $this->container['ack_type'];
    }

    /**
     * Sets ack_type
     *
     * @param string $ack_type ack_type
     *
     * @return $this
     */
    public function setAckType($ack_type)
    {
        $allowedValues = $this->getAckTypeAllowableValues();
        if (!is_null($ack_type) && !in_array($ack_type, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value for 'ack_type', must be one of '%s'",
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['ack_type'] = $ack_type;

        return $this;
    }

    /**
     * Gets ack
     *
     * @return \Swagger\Client\Model\EdiFabricCoreModelEdiEdiMessage
     */
    public function getAck()
    {
        return $this->container['ack'];
    }

    /**
     * Sets ack
     *
     * @param \Swagger\Client\Model\EdiFabricCoreModelEdiEdiMessage $ack ack
     *
     * @return $this
     */
    public function setAck($ack)
    {
        $this->container['ack'] = $ack;

        return $this;
    }

    /**
     * Gets original_transactions
     *
     * @return \Swagger\Client\Model\EdiFabricCoreModelEdiEdiMessage[]
     */
    public function getOriginalTransactions()
    {
        return $this->container['original_transactions'];
    }

    /**
     * Sets original_transactions
     *
     * @param \Swagger\Client\Model\EdiFabricCoreModelEdiEdiMessage[] $original_transactions original_transactions
     *
     * @return $this
     */
    public function setOriginalTransactions($original_transactions)
    {
        $this->container['original_transactions'] = $original_transactions;

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

