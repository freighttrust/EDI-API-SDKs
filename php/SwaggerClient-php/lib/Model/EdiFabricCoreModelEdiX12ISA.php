<?php
/**
 * EdiFabricCoreModelEdiX12ISA
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
 * EdiFabricCoreModelEdiX12ISA Class Doc Comment
 *
 * @category Class
 * @package  Swagger\Client
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class EdiFabricCoreModelEdiX12ISA implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'EdiFabric.Core.Model.Edi.X12.ISA';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'authorization_information_qualifier_1' => 'string',
        'authorization_information_2' => 'string',
        'security_information_qualifier_3' => 'string',
        'security_information_4' => 'string',
        'sender_id_qualifier_5' => 'string',
        'interchange_sender_id_6' => 'string',
        'receiver_id_qualifier_7' => 'string',
        'interchange_receiver_id_8' => 'string',
        'interchange_date_9' => 'string',
        'interchange_time_10' => 'string',
        'interchange_control_standards_identifier_11' => 'string',
        'interchange_control_version_number_12' => 'string',
        'interchange_control_number_13' => 'string',
        'acknowledgement_requested_14' => 'string',
        'usage_indicator_15' => 'string',
        'component_element_separator_16' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'authorization_information_qualifier_1' => null,
        'authorization_information_2' => null,
        'security_information_qualifier_3' => null,
        'security_information_4' => null,
        'sender_id_qualifier_5' => null,
        'interchange_sender_id_6' => null,
        'receiver_id_qualifier_7' => null,
        'interchange_receiver_id_8' => null,
        'interchange_date_9' => null,
        'interchange_time_10' => null,
        'interchange_control_standards_identifier_11' => null,
        'interchange_control_version_number_12' => null,
        'interchange_control_number_13' => null,
        'acknowledgement_requested_14' => null,
        'usage_indicator_15' => null,
        'component_element_separator_16' => null
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
        'authorization_information_qualifier_1' => 'authorizationInformationQualifier_1',
        'authorization_information_2' => 'authorizationInformation_2',
        'security_information_qualifier_3' => 'securityInformationQualifier_3',
        'security_information_4' => 'securityInformation_4',
        'sender_id_qualifier_5' => 'senderIDQualifier_5',
        'interchange_sender_id_6' => 'interchangeSenderID_6',
        'receiver_id_qualifier_7' => 'receiverIDQualifier_7',
        'interchange_receiver_id_8' => 'interchangeReceiverID_8',
        'interchange_date_9' => 'interchangeDate_9',
        'interchange_time_10' => 'interchangeTime_10',
        'interchange_control_standards_identifier_11' => 'interchangeControlStandardsIdentifier_11',
        'interchange_control_version_number_12' => 'interchangeControlVersionNumber_12',
        'interchange_control_number_13' => 'interchangeControlNumber_13',
        'acknowledgement_requested_14' => 'acknowledgementRequested_14',
        'usage_indicator_15' => 'usageIndicator_15',
        'component_element_separator_16' => 'componentElementSeparator_16'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'authorization_information_qualifier_1' => 'setAuthorizationInformationQualifier1',
        'authorization_information_2' => 'setAuthorizationInformation2',
        'security_information_qualifier_3' => 'setSecurityInformationQualifier3',
        'security_information_4' => 'setSecurityInformation4',
        'sender_id_qualifier_5' => 'setSenderIdQualifier5',
        'interchange_sender_id_6' => 'setInterchangeSenderId6',
        'receiver_id_qualifier_7' => 'setReceiverIdQualifier7',
        'interchange_receiver_id_8' => 'setInterchangeReceiverId8',
        'interchange_date_9' => 'setInterchangeDate9',
        'interchange_time_10' => 'setInterchangeTime10',
        'interchange_control_standards_identifier_11' => 'setInterchangeControlStandardsIdentifier11',
        'interchange_control_version_number_12' => 'setInterchangeControlVersionNumber12',
        'interchange_control_number_13' => 'setInterchangeControlNumber13',
        'acknowledgement_requested_14' => 'setAcknowledgementRequested14',
        'usage_indicator_15' => 'setUsageIndicator15',
        'component_element_separator_16' => 'setComponentElementSeparator16'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'authorization_information_qualifier_1' => 'getAuthorizationInformationQualifier1',
        'authorization_information_2' => 'getAuthorizationInformation2',
        'security_information_qualifier_3' => 'getSecurityInformationQualifier3',
        'security_information_4' => 'getSecurityInformation4',
        'sender_id_qualifier_5' => 'getSenderIdQualifier5',
        'interchange_sender_id_6' => 'getInterchangeSenderId6',
        'receiver_id_qualifier_7' => 'getReceiverIdQualifier7',
        'interchange_receiver_id_8' => 'getInterchangeReceiverId8',
        'interchange_date_9' => 'getInterchangeDate9',
        'interchange_time_10' => 'getInterchangeTime10',
        'interchange_control_standards_identifier_11' => 'getInterchangeControlStandardsIdentifier11',
        'interchange_control_version_number_12' => 'getInterchangeControlVersionNumber12',
        'interchange_control_number_13' => 'getInterchangeControlNumber13',
        'acknowledgement_requested_14' => 'getAcknowledgementRequested14',
        'usage_indicator_15' => 'getUsageIndicator15',
        'component_element_separator_16' => 'getComponentElementSeparator16'
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
        $this->container['authorization_information_qualifier_1'] = isset($data['authorization_information_qualifier_1']) ? $data['authorization_information_qualifier_1'] : null;
        $this->container['authorization_information_2'] = isset($data['authorization_information_2']) ? $data['authorization_information_2'] : null;
        $this->container['security_information_qualifier_3'] = isset($data['security_information_qualifier_3']) ? $data['security_information_qualifier_3'] : null;
        $this->container['security_information_4'] = isset($data['security_information_4']) ? $data['security_information_4'] : null;
        $this->container['sender_id_qualifier_5'] = isset($data['sender_id_qualifier_5']) ? $data['sender_id_qualifier_5'] : null;
        $this->container['interchange_sender_id_6'] = isset($data['interchange_sender_id_6']) ? $data['interchange_sender_id_6'] : null;
        $this->container['receiver_id_qualifier_7'] = isset($data['receiver_id_qualifier_7']) ? $data['receiver_id_qualifier_7'] : null;
        $this->container['interchange_receiver_id_8'] = isset($data['interchange_receiver_id_8']) ? $data['interchange_receiver_id_8'] : null;
        $this->container['interchange_date_9'] = isset($data['interchange_date_9']) ? $data['interchange_date_9'] : null;
        $this->container['interchange_time_10'] = isset($data['interchange_time_10']) ? $data['interchange_time_10'] : null;
        $this->container['interchange_control_standards_identifier_11'] = isset($data['interchange_control_standards_identifier_11']) ? $data['interchange_control_standards_identifier_11'] : null;
        $this->container['interchange_control_version_number_12'] = isset($data['interchange_control_version_number_12']) ? $data['interchange_control_version_number_12'] : null;
        $this->container['interchange_control_number_13'] = isset($data['interchange_control_number_13']) ? $data['interchange_control_number_13'] : null;
        $this->container['acknowledgement_requested_14'] = isset($data['acknowledgement_requested_14']) ? $data['acknowledgement_requested_14'] : null;
        $this->container['usage_indicator_15'] = isset($data['usage_indicator_15']) ? $data['usage_indicator_15'] : null;
        $this->container['component_element_separator_16'] = isset($data['component_element_separator_16']) ? $data['component_element_separator_16'] : null;
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
     * Gets authorization_information_qualifier_1
     *
     * @return string
     */
    public function getAuthorizationInformationQualifier1()
    {
        return $this->container['authorization_information_qualifier_1'];
    }

    /**
     * Sets authorization_information_qualifier_1
     *
     * @param string $authorization_information_qualifier_1 authorization_information_qualifier_1
     *
     * @return $this
     */
    public function setAuthorizationInformationQualifier1($authorization_information_qualifier_1)
    {
        $this->container['authorization_information_qualifier_1'] = $authorization_information_qualifier_1;

        return $this;
    }

    /**
     * Gets authorization_information_2
     *
     * @return string
     */
    public function getAuthorizationInformation2()
    {
        return $this->container['authorization_information_2'];
    }

    /**
     * Sets authorization_information_2
     *
     * @param string $authorization_information_2 authorization_information_2
     *
     * @return $this
     */
    public function setAuthorizationInformation2($authorization_information_2)
    {
        $this->container['authorization_information_2'] = $authorization_information_2;

        return $this;
    }

    /**
     * Gets security_information_qualifier_3
     *
     * @return string
     */
    public function getSecurityInformationQualifier3()
    {
        return $this->container['security_information_qualifier_3'];
    }

    /**
     * Sets security_information_qualifier_3
     *
     * @param string $security_information_qualifier_3 security_information_qualifier_3
     *
     * @return $this
     */
    public function setSecurityInformationQualifier3($security_information_qualifier_3)
    {
        $this->container['security_information_qualifier_3'] = $security_information_qualifier_3;

        return $this;
    }

    /**
     * Gets security_information_4
     *
     * @return string
     */
    public function getSecurityInformation4()
    {
        return $this->container['security_information_4'];
    }

    /**
     * Sets security_information_4
     *
     * @param string $security_information_4 security_information_4
     *
     * @return $this
     */
    public function setSecurityInformation4($security_information_4)
    {
        $this->container['security_information_4'] = $security_information_4;

        return $this;
    }

    /**
     * Gets sender_id_qualifier_5
     *
     * @return string
     */
    public function getSenderIdQualifier5()
    {
        return $this->container['sender_id_qualifier_5'];
    }

    /**
     * Sets sender_id_qualifier_5
     *
     * @param string $sender_id_qualifier_5 sender_id_qualifier_5
     *
     * @return $this
     */
    public function setSenderIdQualifier5($sender_id_qualifier_5)
    {
        $this->container['sender_id_qualifier_5'] = $sender_id_qualifier_5;

        return $this;
    }

    /**
     * Gets interchange_sender_id_6
     *
     * @return string
     */
    public function getInterchangeSenderId6()
    {
        return $this->container['interchange_sender_id_6'];
    }

    /**
     * Sets interchange_sender_id_6
     *
     * @param string $interchange_sender_id_6 interchange_sender_id_6
     *
     * @return $this
     */
    public function setInterchangeSenderId6($interchange_sender_id_6)
    {
        $this->container['interchange_sender_id_6'] = $interchange_sender_id_6;

        return $this;
    }

    /**
     * Gets receiver_id_qualifier_7
     *
     * @return string
     */
    public function getReceiverIdQualifier7()
    {
        return $this->container['receiver_id_qualifier_7'];
    }

    /**
     * Sets receiver_id_qualifier_7
     *
     * @param string $receiver_id_qualifier_7 receiver_id_qualifier_7
     *
     * @return $this
     */
    public function setReceiverIdQualifier7($receiver_id_qualifier_7)
    {
        $this->container['receiver_id_qualifier_7'] = $receiver_id_qualifier_7;

        return $this;
    }

    /**
     * Gets interchange_receiver_id_8
     *
     * @return string
     */
    public function getInterchangeReceiverId8()
    {
        return $this->container['interchange_receiver_id_8'];
    }

    /**
     * Sets interchange_receiver_id_8
     *
     * @param string $interchange_receiver_id_8 interchange_receiver_id_8
     *
     * @return $this
     */
    public function setInterchangeReceiverId8($interchange_receiver_id_8)
    {
        $this->container['interchange_receiver_id_8'] = $interchange_receiver_id_8;

        return $this;
    }

    /**
     * Gets interchange_date_9
     *
     * @return string
     */
    public function getInterchangeDate9()
    {
        return $this->container['interchange_date_9'];
    }

    /**
     * Sets interchange_date_9
     *
     * @param string $interchange_date_9 interchange_date_9
     *
     * @return $this
     */
    public function setInterchangeDate9($interchange_date_9)
    {
        $this->container['interchange_date_9'] = $interchange_date_9;

        return $this;
    }

    /**
     * Gets interchange_time_10
     *
     * @return string
     */
    public function getInterchangeTime10()
    {
        return $this->container['interchange_time_10'];
    }

    /**
     * Sets interchange_time_10
     *
     * @param string $interchange_time_10 interchange_time_10
     *
     * @return $this
     */
    public function setInterchangeTime10($interchange_time_10)
    {
        $this->container['interchange_time_10'] = $interchange_time_10;

        return $this;
    }

    /**
     * Gets interchange_control_standards_identifier_11
     *
     * @return string
     */
    public function getInterchangeControlStandardsIdentifier11()
    {
        return $this->container['interchange_control_standards_identifier_11'];
    }

    /**
     * Sets interchange_control_standards_identifier_11
     *
     * @param string $interchange_control_standards_identifier_11 interchange_control_standards_identifier_11
     *
     * @return $this
     */
    public function setInterchangeControlStandardsIdentifier11($interchange_control_standards_identifier_11)
    {
        $this->container['interchange_control_standards_identifier_11'] = $interchange_control_standards_identifier_11;

        return $this;
    }

    /**
     * Gets interchange_control_version_number_12
     *
     * @return string
     */
    public function getInterchangeControlVersionNumber12()
    {
        return $this->container['interchange_control_version_number_12'];
    }

    /**
     * Sets interchange_control_version_number_12
     *
     * @param string $interchange_control_version_number_12 interchange_control_version_number_12
     *
     * @return $this
     */
    public function setInterchangeControlVersionNumber12($interchange_control_version_number_12)
    {
        $this->container['interchange_control_version_number_12'] = $interchange_control_version_number_12;

        return $this;
    }

    /**
     * Gets interchange_control_number_13
     *
     * @return string
     */
    public function getInterchangeControlNumber13()
    {
        return $this->container['interchange_control_number_13'];
    }

    /**
     * Sets interchange_control_number_13
     *
     * @param string $interchange_control_number_13 interchange_control_number_13
     *
     * @return $this
     */
    public function setInterchangeControlNumber13($interchange_control_number_13)
    {
        $this->container['interchange_control_number_13'] = $interchange_control_number_13;

        return $this;
    }

    /**
     * Gets acknowledgement_requested_14
     *
     * @return string
     */
    public function getAcknowledgementRequested14()
    {
        return $this->container['acknowledgement_requested_14'];
    }

    /**
     * Sets acknowledgement_requested_14
     *
     * @param string $acknowledgement_requested_14 acknowledgement_requested_14
     *
     * @return $this
     */
    public function setAcknowledgementRequested14($acknowledgement_requested_14)
    {
        $this->container['acknowledgement_requested_14'] = $acknowledgement_requested_14;

        return $this;
    }

    /**
     * Gets usage_indicator_15
     *
     * @return string
     */
    public function getUsageIndicator15()
    {
        return $this->container['usage_indicator_15'];
    }

    /**
     * Sets usage_indicator_15
     *
     * @param string $usage_indicator_15 usage_indicator_15
     *
     * @return $this
     */
    public function setUsageIndicator15($usage_indicator_15)
    {
        $this->container['usage_indicator_15'] = $usage_indicator_15;

        return $this;
    }

    /**
     * Gets component_element_separator_16
     *
     * @return string
     */
    public function getComponentElementSeparator16()
    {
        return $this->container['component_element_separator_16'];
    }

    /**
     * Sets component_element_separator_16
     *
     * @param string $component_element_separator_16 component_element_separator_16
     *
     * @return $this
     */
    public function setComponentElementSeparator16($component_element_separator_16)
    {
        $this->container['component_element_separator_16'] = $component_element_separator_16;

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


